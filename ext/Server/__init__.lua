class 'VUBaseServer'

function VUBaseServer:__init()
	self.m_ExtensionLoadedEvent = Events:Subscribe('Extension:Loaded', self, self.OnLoaded)
end

function VUBaseServer:OnLoaded()
	print('Enabling spectator mode.')
	PlayerManager:SetSpectatorEnabled(true)
end

-- Initialize the Base.
return VUBaseServer()