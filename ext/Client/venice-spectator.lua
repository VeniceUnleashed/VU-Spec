class 'VeniceSpectator'

local SpectatorControls = require 'venice-spectator/controls'
local SpectatorVanillaUI = require 'venice-spectator/vanilla-ui'
local SpectatorUI = require 'venice-spectator/ui'

function VeniceSpectator:__init()
	-- Initialize our components.
	self.m_Controls = SpectatorControls()
	self.m_VanillaUI = SpectatorVanillaUI()
	self.m_UI = SpectatorUI()
end

function VeniceSpectator:OnUpdate(p_Delta, p_SimDelta)
	self.m_Controls:OnUpdate(p_Delta, p_SimDelta)
	self.m_VanillaUI:OnUpdate(p_Delta, p_SimDelta)
	self.m_UI:OnUpdate(p_Delta, p_SimDelta)
end

function VeniceSpectator:OnLoaded()
	self.m_UI:OnLoaded()
end

function VeniceSpectator:OnPlayerDeleted(p_Player)
	self.m_UI:OnPlayerDeleted(p_Player)
end

function VeniceSpectator:OnPlayerConnected(p_Player)
	self.m_UI:OnPlayerConnected(p_Player)
end

function VeniceSpectator:OnUpdateInput(p_Delta)
	self.m_UI:OnUpdateInput(p_Delta)
end

return VeniceSpectator
