class 'VeniceSpectator'

local SpectatorControls = require 'venice-spectator/controls'
local SpectatorUI = require 'venice-spectator/ui'

function VeniceSpectator:__init()
	-- Initialize our components.
	self.m_Controls = SpectatorControls()
	self.m_UI = SpectatorUI()
end

function VeniceSpectator:Update(p_Delta, p_SimDelta)
	self.m_Controls:Update(p_Delta, p_SimDelta)
	self.m_UI:Update(p_Delta, p_SimDelta)
end

return VeniceSpectator
