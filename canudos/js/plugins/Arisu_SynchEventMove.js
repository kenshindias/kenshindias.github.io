//=============================================================================
// Arisu's Dollhouse - Synchronized Event Movement
// Arisu_SynchEventMove.js
//=============================================================================
 /*:
 * @plugindesc <SynchEventMove> created by Arisu's Dollhouse
 * @author Arisu's Dollhouse
 *
 * @help
 * == Introduction ==
 *
 * Sometimes you want certain events to move whenever the player moves, or maybe
 * when another event moves. This plugin lets you synchronize event movements
 * with your desired target and the type of movement associated with them, too.
 * Events with this movement type can go about randomly, approach their targets,
 * move away from their targets, follow a custom move path, mimic a target,
 * reverse mimic a target, or even mirror them.
 *
 *
 *
 * == Instructions ==
 *
 * # Install this plugin into your RPG Maker MV project's js/plugin folder.
 * # Open your game project in RPG Maker MV and open up the Plugin Manager.
 * # Add a new plugin and place this plugin beneath all Yanfly plugins present.
 * # Adjust any Plugin Parameter settings to this plugin.
 * # Read through plugin help file to understand how to use plugin.
 * # When testing this plugin, save first.
 *
 *
 *
 * == Comment Tags ==
 *
 * This plugin uses Comment Targets. First, open up the event and page you want
 * to synchronize with a target. Then create a comment in it. Use the following
 * text inside the comment for the desired effect:
 *
 *
 *   <Move Synch Target: Player>
 *   <Move Synch Target: Event x>
 *   - This will synchronize this event's movement with the player or event x.
 *   - When using event x, replace 'x' with ID of event.
 *   - If this comment tag isn't present, the event will not synch movements.
 *
 *
 *   <Move Synch Type: Random>
 *   <Move Synch Type: Approach>
 *   <Move Synch Type: Away>
 *   <Move Synch Type: Custom>
 *   <Move Synch Type: Mimic>
 *   <Move Synch Type: Reverse Mimic>
 *   <Move Synch Type: Mirror Horizontal>
 *   <Move Synch Type: Mirror Vertical>
 *   - This will change the behavior of a synchronized event.
 *   - Random: Events will move in random but valid directions.
 *   - Approach: Events will approach their targets.
 *   - Away: Events will move away from their targets.
 *   - Custom: Events will follow the page's assigned custom move route.
 *   - Mimic: Events will move the same direction their targets move.
 *   - Reverse Mimic: Events will move the opposite direction of their targets.
 *   - Mirror Horizontal: Events will move as if there's a horizontal mirror.
 *   - Mirror Vertical: Events will move as if there's a vertical mirror.
 *   - If this comment tag isn't present, the event will default to 'random'.
 *
 *
 *   <Move Synch Delay: x>
 *   - Replace 'x' with the number of steps to wait for the target to move
 *   before it moves itself. For example, if x is 2, then the event will move
 *   once every time the target moves 2 steps.
 *   - If this comment tag isn't present, the event will default to 1 step.
 *
 *
 *
 * == Warning ==
 *
 * This plugin is made for RPG Maker MV versions 1.6.1 and below. If you update
 * RPG Maker MV past that and this plugin breaks, I am NOT responsible for it.
 *
 * == Terms of Use ==
 *
 * # For Free and Commercial Use.
 * # Put "Arisu's Dollhouse" in your game's credits.
 * # Do not redistribute this plugin without permission.
 * # Do not take code from this plugin without permission.
 * # Edit of code is allowed as long as it's within plugin file.
 * # I do not support changes made to code edit.
 *
 * == Changelog ==
 * 
 * * None
 *
 */
//=============================================================================

var _0x3586=['prototype','_events','_moveSynchType','code','approach','moveAwayFromCharacter','moveTowardCharacter','toLowerCase','custom','Game_Event_updateSelfMovement','setupPageSettings','updateSynchMovement','getValidSynchMoveDirections','Game_Event_clearPageSettings','Game_CharacterBase_realMoveSpeed','_moveSynchTarget','Game_Event_setupPageSettings','update','realMoveSpeed','_eventId','mirror\x20horizontal','event','_moveSynchDelay','YEP_StopMapMovement','page','canPass','away','moveStraight','max','mimic','match','list','Arisu_SynchEventMove','call','setupPageSettingsSynchEventMove','SynchEventMove','random','parameters','contains','updateSelfMovement','increaseSteps','push','preventSelfMovement','length','vertical\x20mirror','horizontal\x20mirror','mirror\x20vertical','clearPageSettings','_moveSynchTimer','log','direction'];(function(_0x4592d0,_0x35865a){var _0x1e6013=function(_0x291974){while(--_0x291974){_0x4592d0['push'](_0x4592d0['shift']());}};_0x1e6013(++_0x35865a);}(_0x3586,0x188));var _0x1e60=function(_0x4592d0,_0x35865a){_0x4592d0=_0x4592d0-0x0;var _0x1e6013=_0x3586[_0x4592d0];return _0x1e6013;};var Imported=Imported||{};Imported[_0x1e60('0x30')]=!![];var Arisu=Arisu||{};Arisu[_0x1e60('0x0')]=Arisu[_0x1e60('0x0')]||{};Arisu['MoveAllSynchTargets']=function(_0x12ab6e){if(!$gameMap)return;for(var _0x11bdf4=0x0;_0x11bdf4<$gameMap[_0x1e60('0x11')][_0x1e60('0x8')];_0x11bdf4++){var _0x483bd3=$gameMap[_0x1e60('0x11')][_0x11bdf4];if(_0x483bd3&&_0x483bd3[_0x1e60('0x1f')]===_0x12ab6e){_0x483bd3[_0x1e60('0x1b')]();_0x483bd3[_0x1e60('0x21')]();}}};Arisu['GetMoveSynchTarget']=function(_0x33c162){if(_0x33c162===0x0)return $gamePlayer;return $gameMap[_0x1e60('0x25')](_0x33c162);};Arisu[_0x1e60('0x0')][_0x1e60('0x1e')]=Game_CharacterBase[_0x1e60('0x10')][_0x1e60('0x22')];Game_CharacterBase['prototype'][_0x1e60('0x22')]=function(){if(this[_0x1e60('0x1f')]!==undefined&&this[_0x1e60('0x1f')]>=0x0){console[_0x1e60('0xe')]();return Arisu['GetMoveSynchTarget'](this[_0x1e60('0x1f')])[_0x1e60('0x22')]();}return Arisu[_0x1e60('0x0')][_0x1e60('0x1e')][_0x1e60('0x31')](this);};Arisu['SynchEventMove']['Game_Player_increaseSteps']=Game_Player[_0x1e60('0x10')][_0x1e60('0x5')];Game_Player['prototype'][_0x1e60('0x5')]=function(){Arisu[_0x1e60('0x0')]['Game_Player_increaseSteps'][_0x1e60('0x31')](this);Arisu['MoveAllSynchTargets'](0x0);};Arisu[_0x1e60('0x0')][_0x1e60('0x1d')]=Game_Event[_0x1e60('0x10')][_0x1e60('0xc')];Game_Event[_0x1e60('0x10')][_0x1e60('0xc')]=function(){Arisu[_0x1e60('0x0')][_0x1e60('0x1d')][_0x1e60('0x31')](this);this[_0x1e60('0x1f')]=-0x1;this[_0x1e60('0x12')]=_0x1e60('0x1');};Arisu[_0x1e60('0x0')][_0x1e60('0x20')]=Game_Event[_0x1e60('0x10')][_0x1e60('0x1a')];Game_Event[_0x1e60('0x10')][_0x1e60('0x1a')]=function(){Arisu[_0x1e60('0x0')][_0x1e60('0x20')][_0x1e60('0x31')](this);this[_0x1e60('0x32')]();};Arisu[_0x1e60('0x0')][_0x1e60('0x19')]=Game_Event['prototype'][_0x1e60('0x4')];Game_Event[_0x1e60('0x10')]['updateSelfMovement']=function(){if(this[_0x1e60('0x1f')]>=0x0)return;if(Imported[_0x1e60('0x27')]&&this[_0x1e60('0x7')]())return;Arisu[_0x1e60('0x0')][_0x1e60('0x19')][_0x1e60('0x31')](this);if(this['isMoving']())Arisu['MoveAllSynchTargets'](this[_0x1e60('0x23')]);};Game_Event[_0x1e60('0x10')][_0x1e60('0x32')]=function(){if(!this[_0x1e60('0x28')]())return;this[_0x1e60('0x1f')]=-0x1;this[_0x1e60('0x12')]=_0x1e60('0x1');this[_0x1e60('0x26')]=0x1;this[_0x1e60('0xd')]=0x1;var _0x4bae50=this[_0x1e60('0x2f')]();for(var _0x408f08=0x0;_0x408f08<_0x4bae50['length'];_0x408f08++){var _0x2e0067=_0x4bae50[_0x408f08];if([0x6c,0x198][_0x1e60('0x3')](_0x2e0067[_0x1e60('0x13')])){var _0xedb060=_0x2e0067[_0x1e60('0x2')][0x0];if(_0xedb060[_0x1e60('0x2e')](/<Move Synch Target:[ ](.*)>/i)){var _0x1ac13e=String(RegExp['$1']);if(_0x1ac13e[_0x1e60('0x2e')](/Player/i)){this['_moveSynchTarget']=0x0;}else if(_0x1ac13e[_0x1e60('0x2e')](/Event[ ](.*)/i)){this[_0x1e60('0x1f')]=eval(RegExp['$1']);}}if(_0xedb060[_0x1e60('0x2e')](/<Move Synch Type:[ ](.*)>/i)){this[_0x1e60('0x12')]=String(RegExp['$1'])[_0x1e60('0x17')]();}if(_0xedb060[_0x1e60('0x2e')](/<Move Synch Delay:[ ](.*)>/i)){this['_moveSynchDelay']=Math[_0x1e60('0x2c')](0x1,eval(RegExp['$1']));}}}};Game_Event[_0x1e60('0x10')][_0x1e60('0x1c')]=function(){var _0x44cbd9=[];if(this[_0x1e60('0x29')](this['x'],this['y'],0x2))_0x44cbd9[_0x1e60('0x6')](0x2);if(this[_0x1e60('0x29')](this['x'],this['y'],0x4))_0x44cbd9[_0x1e60('0x6')](0x4);if(this['canPass'](this['x'],this['y'],0x6))_0x44cbd9[_0x1e60('0x6')](0x6);if(this[_0x1e60('0x29')](this['x'],this['y'],0x8))_0x44cbd9[_0x1e60('0x6')](0x8);return _0x44cbd9;};Game_Event[_0x1e60('0x10')][_0x1e60('0x1b')]=function(){this[_0x1e60('0xd')]-=0x1;if(this[_0x1e60('0xd')]>0x0)return;this[_0x1e60('0xd')]=this[_0x1e60('0x26')];var _0x319082=Arisu['GetMoveSynchTarget'](this[_0x1e60('0x1f')]);switch(this['_moveSynchType']){case _0x1e60('0x1'):var _0x1f8b97=this['getValidSynchMoveDirections']();if(_0x1f8b97[_0x1e60('0x8')]>=0x1){var _0x3063af=_0x1f8b97[Math['floor'](Math[_0x1e60('0x1')]()*_0x1f8b97[_0x1e60('0x8')])];this[_0x1e60('0x2b')](_0x3063af);}break;case _0x1e60('0x14'):this[_0x1e60('0x16')](_0x319082);break;case _0x1e60('0x2a'):this[_0x1e60('0x15')](_0x319082);break;case _0x1e60('0x18'):this['updateRoutineMove']();break;case _0x1e60('0x2d'):this[_0x1e60('0x2b')](_0x319082[_0x1e60('0xf')]());break;case'reverse\x20mimic':var _0x37a51a=_0x319082[_0x1e60('0xf')]();if(_0x37a51a===0x1)return this['moveStraight'](0x9);if(_0x37a51a===0x2)return this[_0x1e60('0x2b')](0x8);if(_0x37a51a===0x3)return this['moveStraight'](0x7);if(_0x37a51a===0x4)return this['moveStraight'](0x6);if(_0x37a51a===0x6)return this[_0x1e60('0x2b')](0x4);if(_0x37a51a===0x7)return this[_0x1e60('0x2b')](0x3);if(_0x37a51a===0x8)return this[_0x1e60('0x2b')](0x2);if(_0x37a51a===0x9)return this[_0x1e60('0x2b')](0x1);break;case _0x1e60('0x24'):case _0x1e60('0xa'):var _0x37a51a=_0x319082[_0x1e60('0xf')]();if(_0x37a51a===0x1)return this[_0x1e60('0x2b')](0x7);if(_0x37a51a===0x2)return this['moveStraight'](0x8);if(_0x37a51a===0x3)return this[_0x1e60('0x2b')](0x9);if(_0x37a51a===0x4)return this[_0x1e60('0x2b')](0x4);if(_0x37a51a===0x6)return this['moveStraight'](0x6);if(_0x37a51a===0x7)return this[_0x1e60('0x2b')](0x1);if(_0x37a51a===0x8)return this[_0x1e60('0x2b')](0x2);if(_0x37a51a===0x9)return this[_0x1e60('0x2b')](0x3);break;case _0x1e60('0xb'):case _0x1e60('0x9'):var _0x37a51a=_0x319082['direction']();if(_0x37a51a===0x1)return this[_0x1e60('0x2b')](0x3);if(_0x37a51a===0x2)return this[_0x1e60('0x2b')](0x2);if(_0x37a51a===0x3)return this[_0x1e60('0x2b')](0x1);if(_0x37a51a===0x4)return this[_0x1e60('0x2b')](0x6);if(_0x37a51a===0x6)return this[_0x1e60('0x2b')](0x4);if(_0x37a51a===0x7)return this[_0x1e60('0x2b')](0x9);if(_0x37a51a===0x8)return this[_0x1e60('0x2b')](0x8);if(_0x37a51a===0x9)return this['moveStraight'](0x7);break;default:break;}};