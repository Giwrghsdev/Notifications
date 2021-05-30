local type
local ColorCodes = {"~r~", "~g~", "~o~", "~w~", "~y~", "~s~"}

AddEventHandler("notification:sendNotification")
RegisterNetEvent("notification:sendNotification", function(msg)
  GetType(msg)
  SendNUIMessage({message = CleanMessage(msg), type = type})
end)

function CleanMessage(msg) 
  local msg = msg
  for k, v in pairs(ColorCodes) do
    msg = string.gsub(msg, v, "")
  end
  return msg
end

function GetType(msg)
  local msg = string.upper(msg)
  if string.find(msg, "Επιτυχία") then
    type = "eputixia"
  elseif string.find(msg, "Προειδοποίηση") then
    type = "proeidop"
  else
    type = "kanoniko"
  end
end
