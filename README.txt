Obojima - Full-Color Darkvision
====================================
Foundry VTT version: 13 (intended; not tested in a running Foundry installation)

INSTALLATION
1. Extract the obojima-color-darkvision folder into your Foundry User Data folder under Data/modules/.
   The file should be: Data/modules/obojima-color-darkvision/module.json
2. Restart or reload Foundry.
3. In your world, go to Game Settings > Manage Modules, enable
   'Obojima - Full-Color Darkvision', and save/reload.
4. Ask connected players to refresh their Foundry browser tab.

WHAT IT DOES
The module attempts to change the standard darkvision Vision Mode's
color saturation from grayscale (-1) to normal (0). It loads for players as
well as GM. It does NOT enable Global Illumination, change scene lighting,
change sight ranges, or update actor/token documents.

LIMITATIONS
Not tested against your exact installed D&D5e version or any vision-related
modules. If a system/module uses a different vision mode or custom shader,
this might not affect it. Check a dark scene using a player test account.
If Foundry's version has changed the vision API, open the browser console
(F12) and look for 'Obojima Color Darkvision' warnings.

UNDO
Disable this module in Manage Modules and reload the clients.
If you previously used a scene-wide Global Illumination macro, this module
will NOT reverse those scene updates automatically.
