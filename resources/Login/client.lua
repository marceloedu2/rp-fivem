local nuiOpen = false

AddEventHandler("onClientGameTypeStart", function()
    nuiOpen = not nuiOpen
    SetNuiFocus(nuiOpen, nuiOpen)
    SendNUIMessage({type = "SHOW", payload = nuiOpen})
end)

Citizen.CreateThread(function()
    Citizen.Wait(500)
    DisableControlAction(0, 1, display) -- LookLeftRight
    DisableControlAction(0, 2, display) -- LookUpDown
    DisableControlAction(0, 142, display) -- MeleeAttackAlternate
    DisableControlAction(0, 18, display) -- Enter
    DisableControlAction(0, 322, display) -- ESC
    DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
    SendNUIMessage({
        type = "SEND_RESOURCENAME",
        payload = GetCurrentResourceName()
    })
end)
