class 'VUSpecServer'

function VUSpecServer:__init()
	self:RegisterVars()
	self:RegisterEvents()
end

function VUSpecServer:RegisterVars()
	self.m_Rounds = {}
	self.m_Squads = {}
	self.m_Teams = {}

	self.m_Delta = 0.0
end


function VUSpecServer:RegisterEvents()
	Events:Subscribe('Extension:Loaded', self, self.OnLoaded)
	Events:Subscribe('Engine:Update', self, self.OnUpdate)
	Events:Subscribe('Player:ModuleLoaded', self, self.OnPlayerLoaded)
	Events:Subscribe('Player:Killed', self, self.OnPlayerKilled)
end


function VUSpecServer:OnLoaded()
	print('Enabling spectator mode.')
	PlayerManager:SetSpectatorEnabled(true)

	self.m_Teams = {
		TeamSquadManager:GetTeamPlayerCount(TeamId.Team1),
		TeamSquadManager:GetTeamPlayerCount(TeamId.Team2)
	}

	for i = 1, 2 do
		local s_SquadSizes = {}

		for j = 1, 32 do
			s_SquadSizes[j] = TeamSquadManager:GetSquadPlayerCount(i, j)
		end

		self.m_Squads[i] = s_SquadSizes
	end

	self.m_Rounds = {
		TicketManager:GetCurrentRound(),
		TicketManager:GetRoundCount()
	}

	NetEvents:Broadcast('spec:ts', self.m_Teams)
	NetEvents:Broadcast('spec:sq', self.m_Squads)
	NetEvents:Broadcast('spec:r', self.m_Rounds)
end


function VUSpecServer:OnPlayerKilled(p_Victim, p_Inflictor, p_Position, p_Weapon, p_RoadKill, p_HeadShot, p_ReviveState)
	local s_Killer = -1

	if p_Inflictor ~= nil then
		s_Killer = p_Inflictor.id
	end

	NetEvents:Broadcast('spec:k', s_Killer, p_Victim.id, p_Weapon)
end

function VUSpecServer:OnPlayerLoaded(p_Player)
	NetEvents:SendTo('spec:ts', p_Player, self.m_Teams)
	NetEvents:SendTo('spec:sq', p_Player, self.m_Squads)
	NetEvents:SendTo('spec:r', p_Player, self.m_Rounds)
end
function VUSpecServer:OnUpdate(p_Delta, p_SimulationDelta)
	self.m_Delta = self.m_Delta + p_Delta

	local s_ForceUpdate = false

	if self.m_Delta >= 5.0 then
		s_ForceUpdate = true
		self.m_Delta = 0
	end

	local s_TeamSizes = {
		TeamSquadManager:GetTeamPlayerCount(TeamId.Team1),
		TeamSquadManager:GetTeamPlayerCount(TeamId.Team2)
	}

	if s_TeamSizes[1] ~= self.m_Teams[1] or s_TeamSizes[2] ~= self.m_Teams[2] or s_ForceUpdate then
		self.m_Teams = s_TeamSizes
		NetEvents:Broadcast('spec:ts', self.m_Teams)
	end

	local s_HasSquadsDiff = false

	for i = 1, 2 do
		local s_SquadSizes = {}

		for j = 1, 32 do
			s_SquadSizes[j] = TeamSquadManager:GetSquadPlayerCount(i, j)

			if s_SquadSizes[j] ~= self.m_Squads[i][j] then
				s_HasSquadsDiff = true
			end
		end

		self.m_Squads[i] = s_SquadSizes
	end

	if s_HasSquadsDiff or s_ForceUpdate then
		NetEvents:Broadcast('spec:sq', self.m_Squads)
	end

	local s_Rounds = {
		TicketManager:GetCurrentRound(),
		TicketManager:GetRoundCount()
	}

	if s_Rounds[1] ~= self.m_Rounds[1] or s_Rounds[2] ~= self.m_Rounds[2] or s_ForceUpdate then
		self.m_Rounds = s_Rounds
		NetEvents:Broadcast('spec:r', self.m_Rounds)
	end
end

-- Initialize the Base.
return VUSpecServer()