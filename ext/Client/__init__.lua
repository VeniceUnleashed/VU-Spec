class 'VUBaseClient'

local VeniceSpectator = require 'venice-spectator'

function VUBaseClient:__init()
	-- Initialize all our components.
	self.m_Spectator = VeniceSpectator()

	-- Subscribe to events.
	self.m_EngineUpdateEvent = Events:Subscribe('Engine:Update', self, self.OnUpdate)
end

function VUBaseClient:OnUpdate(p_Delta, p_SimDelta)
	self.m_Spectator:Update(p_Delta, p_SimDelta)
end

-- Initialize the Base.
return VUBaseClient()