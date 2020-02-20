class 'VUSpecClient'

local VeniceSpectator = require 'venice-spectator'

function VUSpecClient:__init()
	-- Initialize all our components.
	self.m_Spectator = VeniceSpectator()

	-- Subscribe to events.
	self.m_EngineUpdateEvent = Events:Subscribe('Engine:Update', self, self.OnUpdate)
	self.m_ExtensionLoadedEvent = Events:Subscribe('Extension:Loaded', self, self.OnLoaded)
	self.m_PlayerDeletedEvent = Events:Subscribe('Player:Deleted', self, self.OnPlayerDeleted)
	self.m_PlayerConnectedEvent = Events:Subscribe('Player:Connected', self, self.OnPlayerConnected)
	self.m_ClientUpdateInputEvent = Events:Subscribe('Client:UpdateInput', self, self.OnUpdateInput)
end

function VUSpecClient:OnUpdate(p_Delta, p_SimDelta)
	self.m_Spectator:OnUpdate(p_Delta, p_SimDelta)
end

function VUSpecClient:OnLoaded()
	self.m_Spectator:OnLoaded()
end

function VUSpecClient:OnPlayerDeleted(p_Player)
	self.m_Spectator:OnPlayerDeleted(p_Player)
end

function VUSpecClient:OnPlayerConnected(p_Player)
	self.m_Spectator:OnPlayerConnected(p_Player)
end

function VUSpecClient:OnUpdateInput(p_Delta)
	self.m_Spectator:OnUpdateInput(p_Delta)
end

-- Initialize the Base.
return VUSpecClient()