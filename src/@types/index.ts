// types
import type {
  BlockObjectResponse,
  RichTextItemResponse,
  ParagraphBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ToggleBlockObjectResponse,
  QuoteBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ColumnListBlockObjectResponse,
  ColumnBlockObjectResponse,
  CalloutBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// "@notionhq/client/build/src/api-endpoints"에서 export하고 있지 않아서 정의함
// prettier-ignore
type EmojiRequest = "😀" | "😃" | "😄" | "😁" | "😆" | "😅" | "🤣" | "😂" | "🙂" | "🙃" | "😉" | "😊" | "😇" | "🥰" | "😍" | "🤩" | "😘" | "😗" | "☺️" | "☺" | "😚" | "😙" | "🥲" | "😋" | "😛" | "😜" | "🤪" | "😝" | "🤑" | "🤗" | "🤭" | "🤫" | "🤔" | "🤐" | "🤨" | "😐" | "😑" | "😶" | "😶‍🌫️" | "😶‍🌫" | "😏" | "😒" | "🙄" | "😬" | "😮‍💨" | "🤥" | "😌" | "😔" | "😪" | "🤤" | "😴" | "😷" | "🤒" | "🤕" | "🤢" | "🤮" | "🤧" | "🥵" | "🥶" | "🥴" | "😵" | "😵‍💫" | "🤯" | "🤠" | "🥳" | "🥸" | "😎" | "🤓" | "🧐" | "😕" | "😟" | "🙁" | "☹️" | "☹" | "😮" | "😯" | "😲" | "😳" | "🥺" | "😦" | "😧" | "😨" | "😰" | "😥" | "😢" | "😭" | "😱" | "😖" | "😣" | "😞" | "😓" | "😩" | "😫" | "🥱" | "😤" | "😡" | "😠" | "🤬" | "😈" | "👿" | "💀" | "☠️" | "☠" | "💩" | "🤡" | "👹" | "👺" | "👻" | "👽" | "👾" | "🤖" | "😺" | "😸" | "😹" | "😻" | "😼" | "😽" | "🙀" | "😿" | "😾" | "🙈" | "🙉" | "🙊" | "💋" | "💌" | "💘" | "💝" | "💖" | "💗" | "💓" | "💞" | "💕" | "💟" | "❣️" | "❣" | "💔" | "❤️‍🔥" | "❤‍🔥" | "❤️‍🩹" | "❤‍🩹" | "❤️" | "❤" | "🧡" | "💛" | "💚" | "💙" | "💜" | "🤎" | "🖤" | "🤍" | "💯" | "💢" | "💥" | "💫" | "💦" | "💨" | "🕳️" | "🕳" | "💣" | "💬" | "👁️‍🗨️" | "🗨️" | "🗨" | "🗯️" | "🗯" | "💭" | "💤" | "👋🏻" | "👋🏼" | "👋🏽" | "👋🏾" | "👋🏿" | "👋" | "🤚🏻" | "🤚🏼" | "🤚🏽" | "🤚🏾" | "🤚🏿" | "🤚" | "🖐🏻" | "🖐🏼" | "🖐🏽" | "🖐🏾" | "🖐🏿" | "🖐️" | "🖐" | "✋🏻" | "✋🏼" | "✋🏽" | "✋🏾" | "✋🏿" | "✋" | "🖖🏻" | "🖖🏼" | "🖖🏽" | "🖖🏾" | "🖖🏿" | "🖖" | "👌🏻" | "👌🏼" | "👌🏽" | "👌🏾" | "👌🏿" | "👌" | "🤌🏻" | "🤌🏼" | "🤌🏽" | "🤌🏾" | "🤌🏿" | "🤌" | "🤏🏻" | "🤏🏼" | "🤏🏽" | "🤏🏾" | "🤏🏿" | "🤏" | "✌🏻" | "✌🏼" | "✌🏽" | "✌🏾" | "✌🏿" | "✌️" | "✌" | "🤞🏻" | "🤞🏼" | "🤞🏽" | "🤞🏾" | "🤞🏿" | "🤞" | "🤟🏻" | "🤟🏼" | "🤟🏽" | "🤟🏾" | "🤟🏿" | "🤟" | "🤘🏻" | "🤘🏼" | "🤘🏽" | "🤘🏾" | "🤘🏿" | "🤘" | "🤙🏻" | "🤙🏼" | "🤙🏽" | "🤙🏾" | "🤙🏿" | "🤙" | "👈🏻" | "👈🏼" | "👈🏽" | "👈🏾" | "👈🏿" | "👈" | "👉🏻" | "👉🏼" | "👉🏽" | "👉🏾" | "👉🏿" | "👉" | "👆🏻" | "👆🏼" | "👆🏽" | "👆🏾" | "👆🏿" | "👆" | "🖕🏻" | "🖕🏼" | "🖕🏽" | "🖕🏾" | "🖕🏿" | "🖕" | "👇🏻" | "👇🏼" | "👇🏽" | "👇🏾" | "👇🏿" | "👇" | "☝🏻" | "☝🏼" | "☝🏽" | "☝🏾" | "☝🏿" | "☝️" | "☝" | "👍🏻" | "👍🏼" | "👍🏽" | "👍🏾" | "👍🏿" | "👍" | "👎🏻" | "👎🏼" | "👎🏽" | "👎🏾" | "👎🏿" | "👎" | "✊🏻" | "✊🏼" | "✊🏽" | "✊🏾" | "✊🏿" | "✊" | "👊🏻" | "👊🏼" | "👊🏽" | "👊🏾" | "👊🏿" | "👊" | "🤛🏻" | "🤛🏼" | "🤛🏽" | "🤛🏾" | "🤛🏿" | "🤛" | "🤜🏻" | "🤜🏼" | "🤜🏽" | "🤜🏾" | "🤜🏿" | "🤜" | "👏🏻" | "👏🏼" | "👏🏽" | "👏🏾" | "👏🏿" | "👏" | "🙌🏻" | "🙌🏼" | "🙌🏽" | "🙌🏾" | "🙌🏿" | "🙌" | "👐🏻" | "👐🏼" | "👐🏽" | "👐🏾" | "👐🏿" | "👐" | "🤲🏻" | "🤲🏼" | "🤲🏽" | "🤲🏾" | "🤲🏿" | "🤲" | "🤝" | "🙏🏻" | "🙏🏼" | "🙏🏽" | "🙏🏾" | "🙏🏿" | "🙏" | "✍🏻" | "✍🏼" | "✍🏽" | "✍🏾" | "✍🏿" | "✍️" | "✍" | "💅🏻" | "💅🏼" | "💅🏽" | "💅🏾" | "💅🏿" | "💅" | "🤳🏻" | "🤳🏼" | "🤳🏽" | "🤳🏾" | "🤳🏿" | "🤳" | "💪🏻" | "💪🏼" | "💪🏽" | "💪🏾" | "💪🏿" | "💪" | "🦾" | "🦿" | "🦵🏻" | "🦵🏼" | "🦵🏽" | "🦵🏾" | "🦵🏿" | "🦵" | "🦶🏻" | "🦶🏼" | "🦶🏽" | "🦶🏾" | "🦶🏿" | "🦶" | "👂🏻" | "👂🏼" | "👂🏽" | "👂🏾" | "👂🏿" | "👂" | "🦻🏻" | "🦻🏼" | "🦻🏽" | "🦻🏾" | "🦻🏿" | "🦻" | "👃🏻" | "👃🏼" | "👃🏽" | "👃🏾" | "👃🏿" | "👃" | "🧠" | "🫀" | "🫁" | "🦷" | "🦴" | "👀" | "👁️" | "👁" | "👅" | "👄" | "👶🏻" | "👶🏼" | "👶🏽" | "👶🏾" | "👶🏿" | "👶" | "🧒🏻" | "🧒🏼" | "🧒🏽" | "🧒🏾" | "🧒🏿" | "🧒" | "👦🏻" | "👦🏼" | "👦🏽" | "👦🏾" | "👦🏿" | "👦" | "👧🏻" | "👧🏼" | "👧🏽" | "👧🏾" | "👧🏿" | "👧" | "🧑🏻" | "🧑🏼" | "🧑🏽" | "🧑🏾" | "🧑🏿" | "🧑" | "👱🏻" | "👱🏼" | "👱🏽" | "👱🏾" | "👱🏿" | "👱" | "👨🏻" | "👨🏼" | "👨🏽" | "👨🏾" | "👨🏿" | "👨" | "🧔🏻" | "🧔🏼" | "🧔🏽" | "🧔🏾" | "🧔🏿" | "🧔" | "🧔🏻‍♂️" | "🧔🏼‍♂️" | "🧔🏽‍♂️" | "🧔🏾‍♂️" | "🧔🏿‍♂️" | "🧔‍♂️" | "🧔‍♂" | "🧔🏻‍♀️" | "🧔🏼‍♀️" | "🧔🏽‍♀️" | "🧔🏾‍♀️" | "🧔🏿‍♀️" | "🧔‍♀️" | "🧔‍♀" | "👨🏻‍🦰" | "👨🏼‍🦰" | "👨🏽‍🦰" | "👨🏾‍🦰" | "👨🏿‍🦰" | "👨‍🦰" | "👨🏻‍🦱" | "👨🏼‍🦱" | "👨🏽‍🦱" | "👨🏾‍🦱" | "👨🏿‍🦱" | "👨‍🦱" | "👨🏻‍🦳" | "👨🏼‍🦳" | "👨🏽‍🦳" | "👨🏾‍🦳" | "👨🏿‍🦳" | "👨‍🦳" | "👨🏻‍🦲" | "👨🏼‍🦲" | "👨🏽‍🦲" | "👨🏾‍🦲" | "👨🏿‍🦲" | "👨‍🦲" | "👩🏻" | "👩🏼" | "👩🏽" | "👩🏾" | "👩🏿" | "👩" | "👩🏻‍🦰" | "👩🏼‍🦰" | "👩🏽‍🦰" | "👩🏾‍🦰" | "👩🏿‍🦰" | "👩‍🦰" | "🧑🏻‍🦰" | "🧑🏼‍🦰" | "🧑🏽‍🦰" | "🧑🏾‍🦰" | "🧑🏿‍🦰" | "🧑‍🦰" | "👩🏻‍🦱" | "👩🏼‍🦱" | "👩🏽‍🦱" | "👩🏾‍🦱" | "👩🏿‍🦱" | "👩‍🦱" | "🧑🏻‍🦱" | "🧑🏼‍🦱" | "🧑🏽‍🦱" | "🧑🏾‍🦱" | "🧑🏿‍🦱" | "🧑‍🦱" | "👩🏻‍🦳" | "👩🏼‍🦳" | "👩🏽‍🦳" | "👩🏾‍🦳" | "👩🏿‍🦳" | "👩‍🦳" | "🧑🏻‍🦳" | "🧑🏼‍🦳" | "🧑🏽‍🦳" | "🧑🏾‍🦳" | "🧑🏿‍🦳" | "🧑‍🦳" | "👩🏻‍🦲" | "👩🏼‍🦲" | "👩🏽‍🦲" | "👩🏾‍🦲" | "👩🏿‍🦲" | "👩‍🦲" | "🧑🏻‍🦲" | "🧑🏼‍🦲" | "🧑🏽‍🦲" | "🧑🏾‍🦲" | "🧑🏿‍🦲" | "🧑‍🦲" | "👱🏻‍♀️" | "👱🏼‍♀️" | "👱🏽‍♀️" | "👱🏾‍♀️" | "👱🏿‍♀️" | "👱‍♀️" | "👱‍♀" | "👱🏻‍♂️" | "👱🏼‍♂️" | "👱🏽‍♂️" | "👱🏾‍♂️" | "👱🏿‍♂️" | "👱‍♂️" | "👱‍♂" | "🧓🏻" | "🧓🏼" | "🧓🏽" | "🧓🏾" | "🧓🏿" | "🧓" | "👴🏻" | "👴🏼" | "👴🏽" | "👴🏾" | "👴🏿" | "👴" | "👵🏻" | "👵🏼" | "👵🏽" | "👵🏾" | "👵🏿" | "👵" | "🙍🏻" | "🙍🏼" | "🙍🏽" | "🙍🏾" | "🙍🏿" | "🙍" | "🙍🏻‍♂️" | "🙍🏼‍♂️" | "🙍🏽‍♂️" | "🙍🏾‍♂️" | "🙍🏿‍♂️" | "🙍‍♂️" | "🙍‍♂" | "🙍🏻‍♀️" | "🙍🏼‍♀️" | "🙍🏽‍♀️" | "🙍🏾‍♀️" | "🙍🏿‍♀️" | "🙍‍♀️" | "🙍‍♀" | "🙎🏻" | "🙎🏼" | "🙎🏽" | "🙎🏾" | "🙎🏿" | "🙎" | "🙎🏻‍♂️" | "🙎🏼‍♂️" | "🙎🏽‍♂️" | "🙎🏾‍♂️" | "🙎🏿‍♂️" | "🙎‍♂️" | "🙎‍♂" | "🙎🏻‍♀️" | "🙎🏼‍♀️" | "🙎🏽‍♀️" | "🙎🏾‍♀️" | "🙎🏿‍♀️" | "🙎‍♀️" | "🙎‍♀" | "🙅🏻" | "🙅🏼" | "🙅🏽" | "🙅🏾" | "🙅🏿" | "🙅" | "🙅🏻‍♂️" | "🙅🏼‍♂️" | "🙅🏽‍♂️" | "🙅🏾‍♂️" | "🙅🏿‍♂️" | "🙅‍♂️" | "🙅‍♂" | "🙅🏻‍♀️" | "🙅🏼‍♀️" | "🙅🏽‍♀️" | "🙅🏾‍♀️" | "🙅🏿‍♀️" | "🙅‍♀️" | "🙅‍♀" | "🙆🏻" | "🙆🏼" | "🙆🏽" | "🙆🏾" | "🙆🏿" | "🙆" | "🙆🏻‍♂️" | "🙆🏼‍♂️" | "🙆🏽‍♂️" | "🙆🏾‍♂️" | "🙆🏿‍♂️" | "🙆‍♂️" | "🙆‍♂" | "🙆🏻‍♀️" | "🙆🏼‍♀️" | "🙆🏽‍♀️" | "🙆🏾‍♀️" | "🙆🏿‍♀️" | "🙆‍♀️" | "🙆‍♀" | "💁🏻" | "💁🏼" | "💁🏽" | "💁🏾" | "💁🏿" | "💁" | "💁🏻‍♂️" | "💁🏼‍♂️" | "💁🏽‍♂️" | "💁🏾‍♂️" | "💁🏿‍♂️" | "💁‍♂️" | "💁‍♂" | "💁🏻‍♀️" | "💁🏼‍♀️" | "💁🏽‍♀️" | "💁🏾‍♀️" | "💁🏿‍♀️" | "💁‍♀️" | "💁‍♀" | "🙋🏻" | "🙋🏼" | "🙋🏽" | "🙋🏾" | "🙋🏿" | "🙋" | "🙋🏻‍♂️" | "🙋🏼‍♂️" | "🙋🏽‍♂️" | "🙋🏾‍♂️" | "🙋🏿‍♂️" | "🙋‍♂️" | "🙋‍♂" | "🙋🏻‍♀️" | "🙋🏼‍♀️" | "🙋🏽‍♀️" | "🙋🏾‍♀️" | "🙋🏿‍♀️" | "🙋‍♀️" | "🙋‍♀" | "🧏🏻" | "🧏🏼" | "🧏🏽" | "🧏🏾" | "🧏🏿" | "🧏" | "🧏🏻‍♂️" | "🧏🏼‍♂️" | "🧏🏽‍♂️" | "🧏🏾‍♂️" | "🧏🏿‍♂️" | "🧏‍♂️" | "🧏‍♂" | "🧏🏻‍♀️" | "🧏🏼‍♀️" | "🧏🏽‍♀️" | "🧏🏾‍♀️" | "🧏🏿‍♀️" | "🧏‍♀️" | "🧏‍♀" | "🙇🏻" | "🙇🏼" | "🙇🏽" | "🙇🏾" | "🙇🏿" | "🙇" | "🙇🏻‍♂️" | "🙇🏼‍♂️" | "🙇🏽‍♂️" | "🙇🏾‍♂️" | "🙇🏿‍♂️" | "🙇‍♂️" | "🙇‍♂" | "🙇🏻‍♀️" | "🙇🏼‍♀️" | "🙇🏽‍♀️" | "🙇🏾‍♀️" | "🙇🏿‍♀️" | "🙇‍♀️" | "🙇‍♀" | "🤦🏻" | "🤦🏼" | "🤦🏽" | "🤦🏾" | "🤦🏿" | "🤦" | "🤦🏻‍♂️" | "🤦🏼‍♂️" | "🤦🏽‍♂️" | "🤦🏾‍♂️" | "🤦🏿‍♂️" | "🤦‍♂️" | "🤦‍♂" | "🤦🏻‍♀️" | "🤦🏼‍♀️" | "🤦🏽‍♀️" | "🤦🏾‍♀️" | "🤦🏿‍♀️" | "🤦‍♀️" | "🤦‍♀" | "🤷🏻" | "🤷🏼" | "🤷🏽" | "🤷🏾" | "🤷🏿" | "🤷" | "🤷🏻‍♂️" | "🤷🏼‍♂️" | "🤷🏽‍♂️" | "🤷🏾‍♂️" | "🤷🏿‍♂️" | "🤷‍♂️" | "🤷‍♂" | "🤷🏻‍♀️" | "🤷🏼‍♀️" | "🤷🏽‍♀️" | "🤷🏾‍♀️" | "🤷🏿‍♀️" | "🤷‍♀️" | "🤷‍♀" | "🧑🏻‍⚕️" | "🧑🏼‍⚕️" | "🧑🏽‍⚕️" | "🧑🏾‍⚕️" | "🧑🏿‍⚕️" | "🧑‍⚕️" | "🧑‍⚕" | "👨🏻‍⚕️" | "👨🏼‍⚕️" | "👨🏽‍⚕️" | "👨🏾‍⚕️" | "👨🏿‍⚕️" | "👨‍⚕️" | "👨‍⚕" | "👩🏻‍⚕️" | "👩🏼‍⚕️" | "👩🏽‍⚕️" | "👩🏾‍⚕️" | "👩🏿‍⚕️" | "👩‍⚕️" | "👩‍⚕" | "🧑🏻‍🎓" | "🧑🏼‍🎓" | "🧑🏽‍🎓" | "🧑🏾‍🎓" | "🧑🏿‍🎓" | "🧑‍🎓" | "👨🏻‍🎓" | "👨🏼‍🎓" | "👨🏽‍🎓" | "👨🏾‍🎓" | "👨🏿‍🎓" | "👨‍🎓" | "👩🏻‍🎓" | "👩🏼‍🎓" | "👩🏽‍🎓" | "👩🏾‍🎓" | "👩🏿‍🎓" | "👩‍🎓" | "🧑🏻‍🏫" | "🧑🏼‍🏫" | "🧑🏽‍🏫" | "🧑🏾‍🏫" | "🧑🏿‍🏫" | "🧑‍🏫" | "👨🏻‍🏫" | "👨🏼‍🏫" | "👨🏽‍🏫" | "👨🏾‍🏫" | "👨🏿‍🏫" | "👨‍🏫" | "👩🏻‍🏫" | "👩🏼‍🏫" | "👩🏽‍🏫" | "👩🏾‍🏫" | "👩🏿‍🏫" | "👩‍🏫" | "🧑🏻‍⚖️" | "🧑🏼‍⚖️" | "🧑🏽‍⚖️" | "🧑🏾‍⚖️" | "🧑🏿‍⚖️" | "🧑‍⚖️" | "🧑‍⚖" | "👨🏻‍⚖️" | "👨🏼‍⚖️" | "👨🏽‍⚖️" | "👨🏾‍⚖️" | "👨🏿‍⚖️" | "👨‍⚖️" | "👨‍⚖" | "👩🏻‍⚖️" | "👩🏼‍⚖️" | "👩🏽‍⚖️" | "👩🏾‍⚖️" | "👩🏿‍⚖️" | "👩‍⚖️" | "👩‍⚖" | "🧑🏻‍🌾" | "🧑🏼‍🌾" | "🧑🏽‍🌾" | "🧑🏾‍🌾" | "🧑🏿‍🌾" | "🧑‍🌾" | "👨🏻‍🌾" | "👨🏼‍🌾" | "👨🏽‍🌾" | "👨🏾‍🌾" | "👨🏿‍🌾" | "👨‍🌾" | "👩🏻‍🌾" | "👩🏼‍🌾" | "👩🏽‍🌾" | "👩🏾‍🌾" | "👩🏿‍🌾" | "👩‍🌾" | "🧑🏻‍🍳" | "🧑🏼‍🍳" | "🧑🏽‍🍳" | "🧑🏾‍🍳" | "🧑🏿‍🍳" | "🧑‍🍳" | "👨🏻‍🍳" | "👨🏼‍🍳" | "👨🏽‍🍳" | "👨🏾‍🍳" | "👨🏿‍🍳" | "👨‍🍳" | "👩🏻‍🍳" | "👩🏼‍🍳" | "👩🏽‍🍳" | "👩🏾‍🍳" | "👩🏿‍🍳" | "👩‍🍳" | "🧑🏻‍🔧" | "🧑🏼‍🔧" | "🧑🏽‍🔧" | "🧑🏾‍🔧" | "🧑🏿‍🔧" | "🧑‍🔧" | "👨🏻‍🔧" | "👨🏼‍🔧" | "👨🏽‍🔧" | "👨🏾‍🔧" | "👨🏿‍🔧" | "👨‍🔧" | "👩🏻‍🔧" | "👩🏼‍🔧" | "👩🏽‍🔧" | "👩🏾‍🔧" | "👩🏿‍🔧" | "👩‍🔧" | "🧑🏻‍🏭" | "🧑🏼‍🏭" | "🧑🏽‍🏭" | "🧑🏾‍🏭" | "🧑🏿‍🏭" | "🧑‍🏭" | "👨🏻‍🏭" | "👨🏼‍🏭" | "👨🏽‍🏭" | "👨🏾‍🏭" | "👨🏿‍🏭" | "👨‍🏭" | "👩🏻‍🏭" | "👩🏼‍🏭" | "👩🏽‍🏭" | "👩🏾‍🏭" | "👩🏿‍🏭" | "👩‍🏭" | "🧑🏻‍💼" | "🧑🏼‍💼" | "🧑🏽‍💼" | "🧑🏾‍💼" | "🧑🏿‍💼" | "🧑‍💼" | "👨🏻‍💼" | "👨🏼‍💼" | "👨🏽‍💼" | "👨🏾‍💼" | "👨🏿‍💼" | "👨‍💼" | "👩🏻‍💼" | "👩🏼‍💼" | "👩🏽‍💼" | "👩🏾‍💼" | "👩🏿‍💼" | "👩‍💼" | "🧑🏻‍🔬" | "🧑🏼‍🔬" | "🧑🏽‍🔬" | "🧑🏾‍🔬" | "🧑🏿‍🔬" | "🧑‍🔬" | "👨🏻‍🔬" | "👨🏼‍🔬" | "👨🏽‍🔬" | "👨🏾‍🔬" | "👨🏿‍🔬" | "👨‍🔬" | "👩🏻‍🔬" | "👩🏼‍🔬" | "👩🏽‍🔬" | "👩🏾‍🔬" | "👩🏿‍🔬" | "👩‍🔬" | "🧑🏻‍💻" | "🧑🏼‍💻" | "🧑🏽‍💻" | "🧑🏾‍💻" | "🧑🏿‍💻" | "🧑‍💻" | "👨🏻‍💻" | "👨🏼‍💻" | "👨🏽‍💻" | "👨🏾‍💻" | "👨🏿‍💻" | "👨‍💻" | "👩🏻‍💻" | "👩🏼‍💻" | "👩🏽‍💻" | "👩🏾‍💻" | "👩🏿‍💻" | "👩‍💻" | "🧑🏻‍🎤" | "🧑🏼‍🎤" | "🧑🏽‍🎤" | "🧑🏾‍🎤" | "🧑🏿‍🎤" | "🧑‍🎤" | "👨🏻‍🎤" | "👨🏼‍🎤" | "👨🏽‍🎤" | "👨🏾‍🎤" | "👨🏿‍🎤" | "👨‍🎤" | "👩🏻‍🎤" | "👩🏼‍🎤" | "👩🏽‍🎤" | "👩🏾‍🎤" | "👩🏿‍🎤" | "👩‍🎤" | "🧑🏻‍🎨" | "🧑🏼‍🎨" | "🧑🏽‍🎨" | "🧑🏾‍🎨" | "🧑🏿‍🎨" | "🧑‍🎨" | "👨🏻‍🎨" | "👨🏼‍🎨" | "👨🏽‍🎨" | "👨🏾‍🎨" | "👨🏿‍🎨" | "👨‍🎨" | "👩🏻‍🎨" | "👩🏼‍🎨" | "👩🏽‍🎨" | "👩🏾‍🎨" | "👩🏿‍🎨" | "👩‍🎨" | "🧑🏻‍✈️" | "🧑🏼‍✈️" | "🧑🏽‍✈️" | "🧑🏾‍✈️" | "🧑🏿‍✈️" | "🧑‍✈️" | "🧑‍✈" | "👨🏻‍✈️" | "👨🏼‍✈️" | "👨🏽‍✈️" | "👨🏾‍✈️" | "👨🏿‍✈️" | "👨‍✈️" | "👨‍✈" | "👩🏻‍✈️" | "👩🏼‍✈️" | "👩🏽‍✈️" | "👩🏾‍✈️" | "👩🏿‍✈️" | "👩‍✈️" | "👩‍✈" | "🧑🏻‍🚀" | "🧑🏼‍🚀" | "🧑🏽‍🚀" | "🧑🏾‍🚀" | "🧑🏿‍🚀" | "🧑‍🚀" | "👨🏻‍🚀" | "👨🏼‍🚀" | "👨🏽‍🚀" | "👨🏾‍🚀" | "👨🏿‍🚀" | "👨‍🚀" | "👩🏻‍🚀" | "👩🏼‍🚀" | "👩🏽‍🚀" | "👩🏾‍🚀" | "👩🏿‍🚀" | "👩‍🚀" | "🧑🏻‍🚒" | "🧑🏼‍🚒" | "🧑🏽‍🚒" | "🧑🏾‍🚒" | "🧑🏿‍🚒" | "🧑‍🚒" | "👨🏻‍🚒" | "👨🏼‍🚒" | "👨🏽‍🚒" | "👨🏾‍🚒" | "👨🏿‍🚒" | "👨‍🚒" | "👩🏻‍🚒" | "👩🏼‍🚒" | "👩🏽‍🚒" | "👩🏾‍🚒" | "👩🏿‍🚒" | "👩‍🚒" | "👮🏻" | "👮🏼" | "👮🏽" | "👮🏾" | "👮🏿" | "👮" | "👮🏻‍♂️" | "👮🏼‍♂️" | "👮🏽‍♂️" | "👮🏾‍♂️" | "👮🏿‍♂️" | "👮‍♂️" | "👮‍♂" | "👮🏻‍♀️" | "👮🏼‍♀️" | "👮🏽‍♀️" | "👮🏾‍♀️" | "👮🏿‍♀️" | "👮‍♀️" | "👮‍♀" | "🕵🏻" | "🕵🏼" | "🕵🏽" | "🕵🏾" | "🕵🏿" | "🕵️" | "🕵" | "🕵🏻‍♂️" | "🕵🏼‍♂️" | "🕵🏽‍♂️" | "🕵🏾‍♂️" | "🕵🏿‍♂️" | "🕵️‍♂️" | "🕵🏻‍♀️" | "🕵🏼‍♀️" | "🕵🏽‍♀️" | "🕵🏾‍♀️" | "🕵🏿‍♀️" | "🕵️‍♀️" | "💂🏻" | "💂🏼" | "💂🏽" | "💂🏾" | "💂🏿" | "💂" | "💂🏻‍♂️" | "💂🏼‍♂️" | "💂🏽‍♂️" | "💂🏾‍♂️" | "💂🏿‍♂️" | "💂‍♂️" | "💂‍♂" | "💂🏻‍♀️" | "💂🏼‍♀️" | "💂🏽‍♀️" | "💂🏾‍♀️" | "💂🏿‍♀️" | "💂‍♀️" | "💂‍♀" | "🥷🏻" | "🥷🏼" | "🥷🏽" | "🥷🏾" | "🥷🏿" | "🥷" | "👷🏻" | "👷🏼" | "👷🏽" | "👷🏾" | "👷🏿" | "👷" | "👷🏻‍♂️" | "👷🏼‍♂️" | "👷🏽‍♂️" | "👷🏾‍♂️" | "👷🏿‍♂️" | "👷‍♂️" | "👷‍♂" | "👷🏻‍♀️" | "👷🏼‍♀️" | "👷🏽‍♀️" | "👷🏾‍♀️" | "👷🏿‍♀️" | "👷‍♀️" | "👷‍♀" | "🤴🏻" | "🤴🏼" | "🤴🏽" | "🤴🏾" | "🤴🏿" | "🤴" | "👸🏻" | "👸🏼" | "👸🏽" | "👸🏾" | "👸🏿" | "👸" | "👳🏻" | "👳🏼" | "👳🏽" | "👳🏾" | "👳🏿" | "👳" | "👳🏻‍♂️" | "👳🏼‍♂️" | "👳🏽‍♂️" | "👳🏾‍♂️" | "👳🏿‍♂️" | "👳‍♂️" | "👳‍♂" | "👳🏻‍♀️" | "👳🏼‍♀️" | "👳🏽‍♀️" | "👳🏾‍♀️" | "👳🏿‍♀️" | "👳‍♀️" | "👳‍♀" | "👲🏻" | "👲🏼" | "👲🏽" | "👲🏾" | "👲🏿" | "👲" | "🧕🏻" | "🧕🏼" | "🧕🏽" | "🧕🏾" | "🧕🏿" | "🧕" | "🤵🏻" | "🤵🏼" | "🤵🏽" | "🤵🏾" | "🤵🏿" | "🤵" | "🤵🏻‍♂️" | "🤵🏼‍♂️" | "🤵🏽‍♂️" | "🤵🏾‍♂️" | "🤵🏿‍♂️" | "🤵‍♂️" | "🤵‍♂" | "🤵🏻‍♀️" | "🤵🏼‍♀️" | "🤵🏽‍♀️" | "🤵🏾‍♀️" | "🤵🏿‍♀️" | "🤵‍♀️" | "🤵‍♀" | "👰🏻" | "👰🏼" | "👰🏽" | "👰🏾" | "👰🏿" | "👰" | "👰🏻‍♂️" | "👰🏼‍♂️" | "👰🏽‍♂️" | "👰🏾‍♂️" | "👰🏿‍♂️" | "👰‍♂️" | "👰‍♂" | "👰🏻‍♀️" | "👰🏼‍♀️" | "👰🏽‍♀️" | "👰🏾‍♀️" | "👰🏿‍♀️" | "👰‍♀️" | "👰‍♀" | "🤰🏻" | "🤰🏼" | "🤰🏽" | "🤰🏾" | "🤰🏿" | "🤰" | "🤱🏻" | "🤱🏼" | "🤱🏽" | "🤱🏾" | "🤱🏿" | "🤱" | "👩🏻‍🍼" | "👩🏼‍🍼" | "👩🏽‍🍼" | "👩🏾‍🍼" | "👩🏿‍🍼" | "👩‍🍼" | "👨🏻‍🍼" | "👨🏼‍🍼" | "👨🏽‍🍼" | "👨🏾‍🍼" | "👨🏿‍🍼" | "👨‍🍼" | "🧑🏻‍🍼" | "🧑🏼‍🍼" | "🧑🏽‍🍼" | "🧑🏾‍🍼" | "🧑🏿‍🍼" | "🧑‍🍼" | "👼🏻" | "👼🏼" | "👼🏽" | "👼🏾" | "👼🏿" | "👼" | "🎅🏻" | "🎅🏼" | "🎅🏽" | "🎅🏾" | "🎅🏿" | "🎅" | "🤶🏻" | "🤶🏼" | "🤶🏽" | "🤶🏾" | "🤶🏿" | "🤶" | "🧑🏻‍🎄" | "🧑🏼‍🎄" | "🧑🏽‍🎄" | "🧑🏾‍🎄" | "🧑🏿‍🎄" | "🧑‍🎄" | "🦸🏻" | "🦸🏼" | "🦸🏽" | "🦸🏾" | "🦸🏿" | "🦸" | "🦸🏻‍♂️" | "🦸🏼‍♂️" | "🦸🏽‍♂️" | "🦸🏾‍♂️" | "🦸🏿‍♂️" | "🦸‍♂️" | "🦸‍♂" | "🦸🏻‍♀️" | "🦸🏼‍♀️" | "🦸🏽‍♀️" | "🦸🏾‍♀️" | "🦸🏿‍♀️" | "🦸‍♀️" | "🦸‍♀" | "🦹🏻" | "🦹🏼" | "🦹🏽" | "🦹🏾" | "🦹🏿" | "🦹" | "🦹🏻‍♂️" | "🦹🏼‍♂️" | "🦹🏽‍♂️" | "🦹🏾‍♂️" | "🦹🏿‍♂️" | "🦹‍♂️" | "🦹‍♂" | "🦹🏻‍♀️" | "🦹🏼‍♀️" | "🦹🏽‍♀️" | "🦹🏾‍♀️" | "🦹🏿‍♀️" | "🦹‍♀️" | "🦹‍♀" | "🧙🏻" | "🧙🏼" | "🧙🏽" | "🧙🏾" | "🧙🏿" | "🧙" | "🧙🏻‍♂️" | "🧙🏼‍♂️" | "🧙🏽‍♂️" | "🧙🏾‍♂️" | "🧙🏿‍♂️" | "🧙‍♂️" | "🧙‍♂" | "🧙🏻‍♀️" | "🧙🏼‍♀️" | "🧙🏽‍♀️" | "🧙🏾‍♀️" | "🧙🏿‍♀️" | "🧙‍♀️" | "🧙‍♀" | "🧚🏻" | "🧚🏼" | "🧚🏽" | "🧚🏾" | "🧚🏿" | "🧚" | "🧚🏻‍♂️" | "🧚🏼‍♂️" | "🧚🏽‍♂️" | "🧚🏾‍♂️" | "🧚🏿‍♂️" | "🧚‍♂️" | "🧚‍♂" | "🧚🏻‍♀️" | "🧚🏼‍♀️" | "🧚🏽‍♀️" | "🧚🏾‍♀️" | "🧚🏿‍♀️" | "🧚‍♀️" | "🧚‍♀" | "🧛🏻" | "🧛🏼" | "🧛🏽" | "🧛🏾" | "🧛🏿" | "🧛" | "🧛🏻‍♂️" | "🧛🏼‍♂️" | "🧛🏽‍♂️" | "🧛🏾‍♂️" | "🧛🏿‍♂️" | "🧛‍♂️" | "🧛‍♂" | "🧛🏻‍♀️" | "🧛🏼‍♀️" | "🧛🏽‍♀️" | "🧛🏾‍♀️" | "🧛🏿‍♀️" | "🧛‍♀️" | "🧛‍♀" | "🧜🏻" | "🧜🏼" | "🧜🏽" | "🧜🏾" | "🧜🏿" | "🧜" | "🧜🏻‍♂️" | "🧜🏼‍♂️" | "🧜🏽‍♂️" | "🧜🏾‍♂️" | "🧜🏿‍♂️" | "🧜‍♂️" | "🧜‍♂" | "🧜🏻‍♀️" | "🧜🏼‍♀️" | "🧜🏽‍♀️" | "🧜🏾‍♀️" | "🧜🏿‍♀️" | "🧜‍♀️" | "🧜‍♀" | "🧝🏻" | "🧝🏼" | "🧝🏽" | "🧝🏾" | "🧝🏿" | "🧝" | "🧝🏻‍♂️" | "🧝🏼‍♂️" | "🧝🏽‍♂️" | "🧝🏾‍♂️" | "🧝🏿‍♂️" | "🧝‍♂️" | "🧝‍♂" | "🧝🏻‍♀️" | "🧝🏼‍♀️" | "🧝🏽‍♀️" | "🧝🏾‍♀️" | "🧝🏿‍♀️" | "🧝‍♀️" | "🧝‍♀" | "🧞" | "🧞‍♂️" | "🧞‍♂" | "🧞‍♀️" | "🧞‍♀" | "🧟" | "🧟‍♂️" | "🧟‍♂" | "🧟‍♀️" | "🧟‍♀" | "💆🏻" | "💆🏼" | "💆🏽" | "💆🏾" | "💆🏿" | "💆" | "💆🏻‍♂️" | "💆🏼‍♂️" | "💆🏽‍♂️" | "💆🏾‍♂️" | "💆🏿‍♂️" | "💆‍♂️" | "💆‍♂" | "💆🏻‍♀️" | "💆🏼‍♀️" | "💆🏽‍♀️" | "💆🏾‍♀️" | "💆🏿‍♀️" | "💆‍♀️" | "💆‍♀" | "💇🏻" | "💇🏼" | "💇🏽" | "💇🏾" | "💇🏿" | "💇" | "💇🏻‍♂️" | "💇🏼‍♂️" | "💇🏽‍♂️" | "💇🏾‍♂️" | "💇🏿‍♂️" | "💇‍♂️" | "💇‍♂" | "💇🏻‍♀️" | "💇🏼‍♀️" | "💇🏽‍♀️" | "💇🏾‍♀️" | "💇🏿‍♀️" | "💇‍♀️" | "💇‍♀" | "🚶🏻" | "🚶🏼" | "🚶🏽" | "🚶🏾" | "🚶🏿" | "🚶" | "🚶🏻‍♂️" | "🚶🏼‍♂️" | "🚶🏽‍♂️" | "🚶🏾‍♂️" | "🚶🏿‍♂️" | "🚶‍♂️" | "🚶‍♂" | "🚶🏻‍♀️" | "🚶🏼‍♀️" | "🚶🏽‍♀️" | "🚶🏾‍♀️" | "🚶🏿‍♀️" | "🚶‍♀️" | "🚶‍♀" | "🧍🏻" | "🧍🏼" | "🧍🏽" | "🧍🏾" | "🧍🏿" | "🧍" | "🧍🏻‍♂️" | "🧍🏼‍♂️" | "🧍🏽‍♂️" | "🧍🏾‍♂️" | "🧍🏿‍♂️" | "🧍‍♂️" | "🧍‍♂" | "🧍🏻‍♀️" | "🧍🏼‍♀️" | "🧍🏽‍♀️" | "🧍🏾‍♀️" | "🧍🏿‍♀️" | "🧍‍♀️" | "🧍‍♀" | "🧎🏻" | "🧎🏼" | "🧎🏽" | "🧎🏾" | "🧎🏿" | "🧎" | "🧎🏻‍♂️" | "🧎🏼‍♂️" | "🧎🏽‍♂️" | "🧎🏾‍♂️" | "🧎🏿‍♂️" | "🧎‍♂️" | "🧎‍♂" | "🧎🏻‍♀️" | "🧎🏼‍♀️" | "🧎🏽‍♀️" | "🧎🏾‍♀️" | "🧎🏿‍♀️" | "🧎‍♀️" | "🧎‍♀" | "🧑🏻‍🦯" | "🧑🏼‍🦯" | "🧑🏽‍🦯" | "🧑🏾‍🦯" | "🧑🏿‍🦯" | "🧑‍🦯" | "👨🏻‍🦯" | "👨🏼‍🦯" | "👨🏽‍🦯" | "👨🏾‍🦯" | "👨🏿‍🦯" | "👨‍🦯" | "👩🏻‍🦯" | "👩🏼‍🦯" | "👩🏽‍🦯" | "👩🏾‍🦯" | "👩🏿‍🦯" | "👩‍🦯" | "🧑🏻‍🦼" | "🧑🏼‍🦼" | "🧑🏽‍🦼" | "🧑🏾‍🦼" | "🧑🏿‍🦼" | "🧑‍🦼" | "👨🏻‍🦼" | "👨🏼‍🦼" | "👨🏽‍🦼" | "👨🏾‍🦼" | "👨🏿‍🦼" | "👨‍🦼" | "👩🏻‍🦼" | "👩🏼‍🦼" | "👩🏽‍🦼" | "👩🏾‍🦼" | "👩🏿‍🦼" | "👩‍🦼" | "🧑🏻‍🦽" | "🧑🏼‍🦽" | "🧑🏽‍🦽" | "🧑🏾‍🦽" | "🧑🏿‍🦽" | "🧑‍🦽" | "👨🏻‍🦽" | "👨🏼‍🦽" | "👨🏽‍🦽" | "👨🏾‍🦽" | "👨🏿‍🦽" | "👨‍🦽" | "👩🏻‍🦽" | "👩🏼‍🦽" | "👩🏽‍🦽" | "👩🏾‍🦽" | "👩🏿‍🦽" | "👩‍🦽" | "🏃🏻" | "🏃🏼" | "🏃🏽" | "🏃🏾" | "🏃🏿" | "🏃" | "🏃🏻‍♂️" | "🏃🏼‍♂️" | "🏃🏽‍♂️" | "🏃🏾‍♂️" | "🏃🏿‍♂️" | "🏃‍♂️" | "🏃‍♂" | "🏃🏻‍♀️" | "🏃🏼‍♀️" | "🏃🏽‍♀️" | "🏃🏾‍♀️" | "🏃🏿‍♀️" | "🏃‍♀️" | "🏃‍♀" | "💃🏻" | "💃🏼" | "💃🏽" | "💃🏾" | "💃🏿" | "💃" | "🕺🏻" | "🕺🏼" | "🕺🏽" | "🕺🏾" | "🕺🏿" | "🕺" | "🕴🏻" | "🕴🏼" | "🕴🏽" | "🕴🏾" | "🕴🏿" | "🕴️" | "🕴" | "👯" | "👯‍♂️" | "👯‍♂" | "👯‍♀️" | "👯‍♀" | "🧖🏻" | "🧖🏼" | "🧖🏽" | "🧖🏾" | "🧖🏿" | "🧖" | "🧖🏻‍♂️" | "🧖🏼‍♂️" | "🧖🏽‍♂️" | "🧖🏾‍♂️" | "🧖🏿‍♂️" | "🧖‍♂️" | "🧖‍♂" | "🧖🏻‍♀️" | "🧖🏼‍♀️" | "🧖🏽‍♀️" | "🧖🏾‍♀️" | "🧖🏿‍♀️" | "🧖‍♀️" | "🧖‍♀" | "🧗🏻" | "🧗🏼" | "🧗🏽" | "🧗🏾" | "🧗🏿" | "🧗" | "🧗🏻‍♂️" | "🧗🏼‍♂️" | "🧗🏽‍♂️" | "🧗🏾‍♂️" | "🧗🏿‍♂️" | "🧗‍♂️" | "🧗‍♂" | "🧗🏻‍♀️" | "🧗🏼‍♀️" | "🧗🏽‍♀️" | "🧗🏾‍♀️" | "🧗🏿‍♀️" | "🧗‍♀️" | "🧗‍♀" | "🤺" | "🏇🏻" | "🏇🏼" | "🏇🏽" | "🏇🏾" | "🏇🏿" | "🏇" | "⛷️" | "⛷" | "🏂🏻" | "🏂🏼" | "🏂🏽" | "🏂🏾" | "🏂🏿" | "🏂" | "🏌🏻" | "🏌🏼" | "🏌🏽" | "🏌🏾" | "🏌🏿" | "🏌️" | "🏌" | "🏌🏻‍♂️" | "🏌🏼‍♂️" | "🏌🏽‍♂️" | "🏌🏾‍♂️" | "🏌🏿‍♂️" | "🏌️‍♂️" | "🏌🏻‍♀️" | "🏌🏼‍♀️" | "🏌🏽‍♀️" | "🏌🏾‍♀️" | "🏌🏿‍♀️" | "🏌️‍♀️" | "🏄🏻" | "🏄🏼" | "🏄🏽" | "🏄🏾" | "🏄🏿" | "🏄" | "🏄🏻‍♂️" | "🏄🏼‍♂️" | "🏄🏽‍♂️" | "🏄🏾‍♂️" | "🏄🏿‍♂️" | "🏄‍♂️" | "🏄‍♂" | "🏄🏻‍♀️" | "🏄🏼‍♀️" | "🏄🏽‍♀️" | "🏄🏾‍♀️" | "🏄🏿‍♀️" | "🏄‍♀️" | "🏄‍♀" | "🚣🏻" | "🚣🏼" | "🚣🏽" | "🚣🏾" | "🚣🏿" | "🚣" | "🚣🏻‍♂️" | "🚣🏼‍♂️" | "🚣🏽‍♂️" | "🚣🏾‍♂️" | "🚣🏿‍♂️" | "🚣‍♂️" | "🚣‍♂" | "🚣🏻‍♀️" | "🚣🏼‍♀️" | "🚣🏽‍♀️" | "🚣🏾‍♀️" | "🚣🏿‍♀️" | "🚣‍♀️" | "🚣‍♀" | "🏊🏻" | "🏊🏼" | "🏊🏽" | "🏊🏾" | "🏊🏿" | "🏊" | "🏊🏻‍♂️" | "🏊🏼‍♂️" | "🏊🏽‍♂️" | "🏊🏾‍♂️" | "🏊🏿‍♂️" | "🏊‍♂️" | "🏊‍♂" | "🏊🏻‍♀️" | "🏊🏼‍♀️" | "🏊🏽‍♀️" | "🏊🏾‍♀️" | "🏊🏿‍♀️" | "🏊‍♀️" | "🏊‍♀" | "⛹🏻" | "⛹🏼" | "⛹🏽" | "⛹🏾" | "⛹🏿" | "⛹️" | "⛹" | "⛹🏻‍♂️" | "⛹🏼‍♂️" | "⛹🏽‍♂️" | "⛹🏾‍♂️" | "⛹🏿‍♂️" | "⛹️‍♂️" | "⛹🏻‍♀️" | "⛹🏼‍♀️" | "⛹🏽‍♀️" | "⛹🏾‍♀️" | "⛹🏿‍♀️" | "⛹️‍♀️" | "🏋🏻" | "🏋🏼" | "🏋🏽" | "🏋🏾" | "🏋🏿" | "🏋️" | "🏋" | "🏋🏻‍♂️" | "🏋🏼‍♂️" | "🏋🏽‍♂️" | "🏋🏾‍♂️" | "🏋🏿‍♂️" | "🏋️‍♂️" | "🏋🏻‍♀️" | "🏋🏼‍♀️" | "🏋🏽‍♀️" | "🏋🏾‍♀️" | "🏋🏿‍♀️" | "🏋️‍♀️" | "🚴🏻" | "🚴🏼" | "🚴🏽" | "🚴🏾" | "🚴🏿" | "🚴" | "🚴🏻‍♂️" | "🚴🏼‍♂️" | "🚴🏽‍♂️" | "🚴🏾‍♂️" | "🚴🏿‍♂️" | "🚴‍♂️" | "🚴‍♂" | "🚴🏻‍♀️" | "🚴🏼‍♀️" | "🚴🏽‍♀️" | "🚴🏾‍♀️" | "🚴🏿‍♀️" | "🚴‍♀️" | "🚴‍♀" | "🚵🏻" | "🚵🏼" | "🚵🏽" | "🚵🏾" | "🚵🏿" | "🚵" | "🚵🏻‍♂️" | "🚵🏼‍♂️" | "🚵🏽‍♂️" | "🚵🏾‍♂️" | "🚵🏿‍♂️" | "🚵‍♂️" | "🚵‍♂" | "🚵🏻‍♀️" | "🚵🏼‍♀️" | "🚵🏽‍♀️" | "🚵🏾‍♀️" | "🚵🏿‍♀️" | "🚵‍♀️" | "🚵‍♀" | "🤸🏻" | "🤸🏼" | "🤸🏽" | "🤸🏾" | "🤸🏿" | "🤸" | "🤸🏻‍♂️" | "🤸🏼‍♂️" | "🤸🏽‍♂️" | "🤸🏾‍♂️" | "🤸🏿‍♂️" | "🤸‍♂️" | "🤸‍♂" | "🤸🏻‍♀️" | "🤸🏼‍♀️" | "🤸🏽‍♀️" | "🤸🏾‍♀️" | "🤸🏿‍♀️" | "🤸‍♀️" | "🤸‍♀" | "🤼" | "🤼‍♂️" | "🤼‍♂" | "🤼‍♀️" | "🤼‍♀" | "🤽🏻" | "🤽🏼" | "🤽🏽" | "🤽🏾" | "🤽🏿" | "🤽" | "🤽🏻‍♂️" | "🤽🏼‍♂️" | "🤽🏽‍♂️" | "🤽🏾‍♂️" | "🤽🏿‍♂️" | "🤽‍♂️" | "🤽‍♂" | "🤽🏻‍♀️" | "🤽🏼‍♀️" | "🤽🏽‍♀️" | "🤽🏾‍♀️" | "🤽🏿‍♀️" | "🤽‍♀️" | "🤽‍♀" | "🤾🏻" | "🤾🏼" | "🤾🏽" | "🤾🏾" | "🤾🏿" | "🤾" | "🤾🏻‍♂️" | "🤾🏼‍♂️" | "🤾🏽‍♂️" | "🤾🏾‍♂️" | "🤾🏿‍♂️" | "🤾‍♂️" | "🤾‍♂" | "🤾🏻‍♀️" | "🤾🏼‍♀️" | "🤾🏽‍♀️" | "🤾🏾‍♀️" | "🤾🏿‍♀️" | "🤾‍♀️" | "🤾‍♀" | "🤹🏻" | "🤹🏼" | "🤹🏽" | "🤹🏾" | "🤹🏿" | "🤹" | "🤹🏻‍♂️" | "🤹🏼‍♂️" | "🤹🏽‍♂️" | "🤹🏾‍♂️" | "🤹🏿‍♂️" | "🤹‍♂️" | "🤹‍♂" | "🤹🏻‍♀️" | "🤹🏼‍♀️" | "🤹🏽‍♀️" | "🤹🏾‍♀️" | "🤹🏿‍♀️" | "🤹‍♀️" | "🤹‍♀" | "🧘🏻" | "🧘🏼" | "🧘🏽" | "🧘🏾" | "🧘🏿" | "🧘" | "🧘🏻‍♂️" | "🧘🏼‍♂️" | "🧘🏽‍♂️" | "🧘🏾‍♂️" | "🧘🏿‍♂️" | "🧘‍♂️" | "🧘‍♂" | "🧘🏻‍♀️" | "🧘🏼‍♀️" | "🧘🏽‍♀️" | "🧘🏾‍♀️" | "🧘🏿‍♀️" | "🧘‍♀️" | "🧘‍♀" | "🛀🏻" | "🛀🏼" | "🛀🏽" | "🛀🏾" | "🛀🏿" | "🛀" | "🛌🏻" | "🛌🏼" | "🛌🏽" | "🛌🏾" | "🛌🏿" | "🛌" | "🧑🏻‍🤝‍🧑🏻" | "🧑🏻‍🤝‍🧑🏼" | "🧑🏻‍🤝‍🧑🏽" | "🧑🏻‍🤝‍🧑🏾" | "🧑🏻‍🤝‍🧑🏿" | "🧑🏼‍🤝‍🧑🏻" | "🧑🏼‍🤝‍🧑🏼" | "🧑🏼‍🤝‍🧑🏽" | "🧑🏼‍🤝‍🧑🏾" | "🧑🏼‍🤝‍🧑🏿" | "🧑🏽‍🤝‍🧑🏻" | "🧑🏽‍🤝‍🧑🏼" | "🧑🏽‍🤝‍🧑🏽" | "🧑🏽‍🤝‍🧑🏾" | "🧑🏽‍🤝‍🧑🏿" | "🧑🏾‍🤝‍🧑🏻" | "🧑🏾‍🤝‍🧑🏼" | "🧑🏾‍🤝‍🧑🏽" | "🧑🏾‍🤝‍🧑🏾" | "🧑🏾‍🤝‍🧑🏿" | "🧑🏿‍🤝‍🧑🏻" | "🧑🏿‍🤝‍🧑🏼" | "🧑🏿‍🤝‍🧑🏽" | "🧑🏿‍🤝‍🧑🏾" | "🧑🏿‍🤝‍🧑🏿" | "🧑‍🤝‍🧑" | "👭" | "👫" | "👬" | "💏" | "💑" | "👪" | "👨‍👩‍👦" | "👨‍👩‍👧" | "👨‍👩‍👧‍👦" | "👨‍👩‍👦‍👦" | "👨‍👩‍👧‍👧" | "👨‍👨‍👦" | "👨‍👨‍👧" | "👨‍👨‍👧‍👦" | "👨‍👨‍👦‍👦" | "👨‍👨‍👧‍👧" | "👩‍👩‍👦" | "👩‍👩‍👧" | "👩‍👩‍👧‍👦" | "👩‍👩‍👦‍👦" | "👩‍👩‍👧‍👧" | "👨‍👦" | "👨‍👦‍👦" | "👨‍👧" | "👨‍👧‍👦" | "👨‍👧‍👧" | "👩‍👦" | "👩‍👦‍👦" | "👩‍👧" | "👩‍👧‍👦" | "👩‍👧‍👧" | "🗣️" | "🗣" | "👤" | "👥" | "🫂" | "👣" | "🐵" | "🐒" | "🦍" | "🦧" | "🐶" | "🐕" | "🦮" | "🐕‍🦺" | "🐩" | "🐺" | "🦊" | "🦝" | "🐱" | "🐈" | "🐈‍⬛" | "🦁" | "🐯" | "🐅" | "🐆" | "🐴" | "🐎" | "🦄" | "🦓" | "🦌" | "🦬" | "🐮" | "🐂" | "🐃" | "🐄" | "🐷" | "🐖" | "🐗" | "🐽" | "🐏" | "🐑" | "🐐" | "🐪" | "🐫" | "🦙" | "🦒" | "🐘" | "🦣" | "🦏" | "🦛" | "🐭" | "🐁" | "🐀" | "🐹" | "🐰" | "🐇" | "🐿️" | "🐿" | "🦫" | "🦔" | "🦇" | "🐻" | "🐻‍❄️" | "🐻‍❄" | "🐨" | "🐼" | "🦥" | "🦦" | "🦨" | "🦘" | "🦡" | "🐾" | "🦃" | "🐔" | "🐓" | "🐣" | "🐤" | "🐥" | "🐦" | "🐧" | "🕊️" | "🕊" | "🦅" | "🦆" | "🦢" | "🦉" | "🦤" | "🪶" | "🦩" | "🦚" | "🦜" | "🐸" | "🐊" | "🐢" | "🦎" | "🐍" | "🐲" | "🐉" | "🦕" | "🦖" | "🐳" | "🐋" | "🐬" | "🦭" | "🐟" | "🐠" | "🐡" | "🦈" | "🐙" | "🐚" | "🐌" | "🦋" | "🐛" | "🐜" | "🐝" | "🪲" | "🐞" | "🦗" | "🪳" | "🕷️" | "🕷" | "🕸️" | "🕸" | "🦂" | "🦟" | "🪰" | "🪱" | "🦠" | "💐" | "🌸" | "💮" | "🏵️" | "🏵" | "🌹" | "🥀" | "🌺" | "🌻" | "🌼" | "🌷" | "🌱" | "🪴" | "🌲" | "🌳" | "🌴" | "🌵" | "🌾" | "🌿" | "☘️" | "☘" | "🍀" | "🍁" | "🍂" | "🍃" | "🍇" | "🍈" | "🍉" | "🍊" | "🍋" | "🍌" | "🍍" | "🥭" | "🍎" | "🍏" | "🍐" | "🍑" | "🍒" | "🍓" | "🫐" | "🥝" | "🍅" | "🫒" | "🥥" | "🥑" | "🍆" | "🥔" | "🥕" | "🌽" | "🌶️" | "🌶" | "🫑" | "🥒" | "🥬" | "🥦" | "🧄" | "🧅" | "🍄" | "🥜" | "🌰" | "🍞" | "🥐" | "🥖" | "🫓" | "🥨" | "🥯" | "🥞" | "🧇" | "🧀" | "🍖" | "🍗" | "🥩" | "🥓" | "🍔" | "🍟" | "🍕" | "🌭" | "🥪" | "🌮" | "🌯" | "🫔" | "🥙" | "🧆" | "🥚" | "🍳" | "🥘" | "🍲" | "🫕" | "🥣" | "🥗" | "🍿" | "🧈" | "🧂" | "🥫" | "🍱" | "🍘" | "🍙" | "🍚" | "🍛" | "🍜" | "🍝" | "🍠" | "🍢" | "🍣" | "🍤" | "🍥" | "🥮" | "🍡" | "🥟" | "🥠" | "🥡" | "🦀" | "🦞" | "🦐" | "🦑" | "🦪" | "🍦" | "🍧" | "🍨" | "🍩" | "🍪" | "🎂" | "🍰" | "🧁" | "🥧" | "🍫" | "🍬" | "🍭" | "🍮" | "🍯" | "🍼" | "🥛" | "☕" | "🫖" | "🍵" | "🍶" | "🍾" | "🍷" | "🍸" | "🍹" | "🍺" | "🍻" | "🥂" | "🥃" | "🥤" | "🧋" | "🧃" | "🧉" | "🧊" | "🥢" | "🍽️" | "🍽" | "🍴" | "🥄" | "🔪" | "🏺" | "🌍" | "🌎" | "🌏" | "🌐" | "🗺️" | "🗺" | "🗾" | "🧭" | "🏔️" | "🏔" | "⛰️" | "⛰" | "🌋" | "🗻" | "🏕️" | "🏕" | "🏖️" | "🏖" | "🏜️" | "🏜" | "🏝️" | "🏝" | "🏞️" | "🏞" | "🏟️" | "🏟" | "🏛️" | "🏛" | "🏗️" | "🏗" | "🧱" | "🪨" | "🪵" | "🛖" | "🏘️" | "🏘" | "🏚️" | "🏚" | "🏠" | "🏡" | "🏢" | "🏣" | "🏤" | "🏥" | "🏦" | "🏨" | "🏩" | "🏪" | "🏫" | "🏬" | "🏭" | "🏯" | "🏰" | "💒" | "🗼" | "🗽" | "⛪" | "🕌" | "🛕" | "🕍" | "⛩️" | "⛩" | "🕋" | "⛲" | "⛺" | "🌁" | "🌃" | "🏙️" | "🏙" | "🌄" | "🌅" | "🌆" | "🌇" | "🌉" | "♨️" | "♨" | "🎠" | "🎡" | "🎢" | "💈" | "🎪" | "🚂" | "🚃" | "🚄" | "🚅" | "🚆" | "🚇" | "🚈" | "🚉" | "🚊" | "🚝" | "🚞" | "🚋" | "🚌" | "🚍" | "🚎" | "🚐" | "🚑" | "🚒" | "🚓" | "🚔" | "🚕" | "🚖" | "🚗" | "🚘" | "🚙" | "🛻" | "🚚" | "🚛" | "🚜" | "🏎️" | "🏎" | "🏍️" | "🏍" | "🛵" | "🦽" | "🦼" | "🛺" | "🚲" | "🛴" | "🛹" | "🛼" | "🚏" | "🛣️" | "🛣" | "🛤️" | "🛤" | "🛢️" | "🛢" | "⛽" | "🚨" | "🚥" | "🚦" | "🛑" | "🚧" | "⚓" | "⛵" | "🛶" | "🚤" | "🛳️" | "🛳" | "⛴️" | "⛴" | "🛥️" | "🛥" | "🚢" | "✈️" | "✈" | "🛩️" | "🛩" | "🛫" | "🛬" | "🪂" | "💺" | "🚁" | "🚟" | "🚠" | "🚡" | "🛰️" | "🛰" | "🚀" | "🛸" | "🛎️" | "🛎" | "🧳" | "⌛" | "⏳" | "⌚" | "⏰" | "⏱️" | "⏱" | "⏲️" | "⏲" | "🕰️" | "🕰" | "🕛" | "🕧" | "🕐" | "🕜" | "🕑" | "🕝" | "🕒" | "🕞" | "🕓" | "🕟" | "🕔" | "🕠" | "🕕" | "🕡" | "🕖" | "🕢" | "🕗" | "🕣" | "🕘" | "🕤" | "🕙" | "🕥" | "🕚" | "🕦" | "🌑" | "🌒" | "🌓" | "🌔" | "🌕" | "🌖" | "🌗" | "🌘" | "🌙" | "🌚" | "🌛" | "🌜" | "🌡️" | "🌡" | "☀️" | "☀" | "🌝" | "🌞" | "🪐" | "⭐" | "🌟" | "🌠" | "🌌" | "☁️" | "☁" | "⛅" | "⛈️" | "⛈" | "🌤️" | "🌤" | "🌥️" | "🌥" | "🌦️" | "🌦" | "🌧️" | "🌧" | "🌨️" | "🌨" | "🌩️" | "🌩" | "🌪️" | "🌪" | "🌫️" | "🌫" | "🌬️" | "🌬" | "🌀" | "🌈" | "🌂" | "☂️" | "☂" | "☔" | "⛱️" | "⛱" | "⚡" | "❄️" | "❄" | "☃️" | "☃" | "⛄" | "☄️" | "☄" | "🔥" | "💧" | "🌊" | "🎃" | "🎄" | "🎆" | "🎇" | "🧨" | "✨" | "🎈" | "🎉" | "🎊" | "🎋" | "🎍" | "🎎" | "🎏" | "🎐" | "🎑" | "🧧" | "🎀" | "🎁" | "🎗️" | "🎗" | "🎟️" | "🎟" | "🎫" | "🎖️" | "🎖" | "🏆" | "🏅" | "🥇" | "🥈" | "🥉" | "⚽" | "⚾" | "🥎" | "🏀" | "🏐" | "🏈" | "🏉" | "🎾" | "🥏" | "🎳" | "🏏" | "🏑" | "🏒" | "🥍" | "🏓" | "🏸" | "🥊" | "🥋" | "🥅" | "⛳" | "⛸️" | "⛸" | "🎣" | "🤿" | "🎽" | "🎿" | "🛷" | "🥌" | "🎯" | "🪀" | "🪁" | "🎱" | "🔮" | "🪄" | "🧿" | "🎮" | "🕹️" | "🕹" | "🎰" | "🎲" | "🧩" | "🧸" | "🪅" | "🪆" | "♠️" | "♠" | "♥️" | "♥" | "♦️" | "♦" | "♣️" | "♣" | "♟️" | "♟" | "🃏" | "🀄" | "🎴" | "🎭" | "🖼️" | "🖼" | "🎨" | "🧵" | "🪡" | "🧶" | "🪢" | "👓" | "🕶️" | "🕶" | "🥽" | "🥼" | "🦺" | "👔" | "👕" | "👖" | "🧣" | "🧤" | "🧥" | "🧦" | "👗" | "👘" | "🥻" | "🩱" | "🩲" | "🩳" | "👙" | "👚" | "👛" | "👜" | "👝" | "🛍️" | "🛍" | "🎒" | "🩴" | "👞" | "👟" | "🥾" | "🥿" | "👠" | "👡" | "🩰" | "👢" | "👑" | "👒" | "🎩" | "🎓" | "🧢" | "🪖" | "⛑️" | "⛑" | "📿" | "💄" | "💍" | "💎" | "🔇" | "🔈" | "🔉" | "🔊" | "📢" | "📣" | "📯" | "🔔" | "🔕" | "🎼" | "🎵" | "🎶" | "🎙️" | "🎙" | "🎚️" | "🎚" | "🎛️" | "🎛" | "🎤" | "🎧" | "📻" | "🎷" | "🪗" | "🎸" | "🎹" | "🎺" | "🎻" | "🪕" | "🥁" | "🪘" | "📱" | "📲" | "☎️" | "☎" | "📞" | "📟" | "📠" | "🔋" | "🔌" | "💻" | "🖥️" | "🖥" | "🖨️" | "🖨" | "⌨️" | "⌨" | "🖱️" | "🖱" | "🖲️" | "🖲" | "💽" | "💾" | "💿" | "📀" | "🧮" | "🎥" | "🎞️" | "🎞" | "📽️" | "📽" | "🎬" | "📺" | "📷" | "📸" | "📹" | "📼" | "🔍" | "🔎" | "🕯️" | "🕯" | "💡" | "🔦" | "🏮" | "🪔" | "📔" | "📕" | "📖" | "📗" | "📘" | "📙" | "📚" | "📓" | "📒" | "📃" | "📜" | "📄" | "📰" | "🗞️" | "🗞" | "📑" | "🔖" | "🏷️" | "🏷" | "💰" | "🪙" | "💴" | "💵" | "💶" | "💷" | "💸" | "💳" | "🧾" | "💹" | "✉️" | "✉" | "📧" | "📨" | "📩" | "📤" | "📥" | "📦" | "📫" | "📪" | "📬" | "📭" | "📮" | "🗳️" | "🗳" | "✏️" | "✏" | "✒️" | "✒" | "🖋️" | "🖋" | "🖊️" | "🖊" | "🖌️" | "🖌" | "🖍️" | "🖍" | "📝" | "💼" | "📁" | "📂" | "🗂️" | "🗂" | "📅" | "📆" | "🗒️" | "🗒" | "🗓️" | "🗓" | "📇" | "📈" | "📉" | "📊" | "📋" | "📌" | "📍" | "📎" | "🖇️" | "🖇" | "📏" | "📐" | "✂️" | "✂" | "🗃️" | "🗃" | "🗄️" | "🗄" | "🗑️" | "🗑" | "🔒" | "🔓" | "🔏" | "🔐" | "🔑" | "🗝️" | "🗝" | "🔨" | "🪓" | "⛏️" | "⛏" | "⚒️" | "⚒" | "🛠️" | "🛠" | "🗡️" | "🗡" | "⚔️" | "⚔" | "🔫" | "🪃" | "🏹" | "🛡️" | "🛡" | "🪚" | "🔧" | "🪛" | "🔩" | "⚙️" | "⚙" | "🗜️" | "🗜" | "⚖️" | "⚖" | "🦯" | "🔗" | "⛓️" | "⛓" | "🪝" | "🧰" | "🧲" | "🪜" | "⚗️" | "⚗" | "🧪" | "🧫" | "🧬" | "🔬" | "🔭" | "📡" | "💉" | "🩸" | "💊" | "🩹" | "🩺" | "🚪" | "🛗" | "🪞" | "🪟" | "🛏️" | "🛏" | "🛋️" | "🛋" | "🪑" | "🚽" | "🪠" | "🚿" | "🛁" | "🪤" | "🪒" | "🧴" | "🧷" | "🧹" | "🧺" | "🧻" | "🪣" | "🧼" | "🪥" | "🧽" | "🧯" | "🛒" | "🚬" | "⚰️" | "⚰" | "🪦" | "⚱️" | "⚱" | "🗿" | "🪧" | "🏧" | "🚮" | "🚰" | "♿" | "🚹" | "🚺" | "🚻" | "🚼" | "🚾" | "🛂" | "🛃" | "🛄" | "🛅" | "⚠️" | "⚠" | "🚸" | "⛔" | "🚫" | "🚳" | "🚭" | "🚯" | "🚱" | "🚷" | "📵" | "🔞" | "☢️" | "☢" | "☣️" | "☣" | "⬆️" | "⬆" | "↗️" | "↗" | "➡️" | "➡" | "↘️" | "↘" | "⬇️" | "⬇" | "↙️" | "↙" | "⬅️" | "⬅" | "↖️" | "↖" | "↕️" | "↕" | "↔️" | "↩️" | "↩" | "↪️" | "↪" | "⤴️" | "⤴" | "⤵️" | "⤵" | "🔃" | "🔄" | "🔙" | "🔚" | "🔛" | "🔜" | "🔝" | "🛐" | "⚛️" | "⚛" | "🕉️" | "🕉" | "✡️" | "✡" | "☸️" | "☸" | "☯️" | "☯" | "✝️" | "✝" | "☦️" | "☦" | "☪️" | "☪" | "☮️" | "☮" | "🕎" | "🔯" | "♈" | "♉" | "♊" | "♋" | "♌" | "♍" | "♎" | "♏" | "♐" | "♑" | "♒" | "♓" | "⛎" | "🔀" | "🔁" | "🔂" | "▶️" | "⏩" | "⏭️" | "⏭" | "⏯️" | "⏯" | "◀️" | "⏪" | "⏮️" | "⏮" | "🔼" | "⏫" | "🔽" | "⏬" | "⏸️" | "⏸" | "⏹️" | "⏹" | "⏺️" | "⏺" | "⏏️" | "⏏" | "🎦" | "🔅" | "🔆" | "📶" | "📳" | "📴" | "♀️" | "♀" | "♂️" | "♂" | "⚧️" | "⚧" | "✖️" | "✖" | "➕" | "➖" | "➗" | "♾️" | "♾" | "‼️" | "‼" | "⁉️" | "⁉" | "❓" | "❔" | "❕" | "❗" | "〰️" | "〰" | "💱" | "💲" | "⚕️" | "⚕" | "♻️" | "♻" | "⚜️" | "⚜" | "🔱" | "📛" | "🔰" | "⭕" | "✅" | "☑️" | "☑" | "✔️" | "✔" | "❌" | "❎" | "➰" | "➿" | "〽️" | "〽" | "✳️" | "✳" | "✴️" | "✴" | "❇️" | "❇" | "©️" | "©" | "®️" | "®" | "™️" | "#️⃣" | "#⃣" | "*️⃣" | "*⃣" | "0️⃣" | "0⃣" | "1️⃣" | "1⃣" | "2️⃣" | "2⃣" | "3️⃣" | "3⃣" | "4️⃣" | "4⃣" | "5️⃣" | "5⃣" | "6️⃣" | "6⃣" | "7️⃣" | "7⃣" | "8️⃣" | "8⃣" | "9️⃣" | "9⃣" | "🔟" | "🔠" | "🔡" | "🔢" | "🔣" | "🔤" | "🅰️" | "🅰" | "🆎" | "🅱️" | "🅱" | "🆑" | "🆒" | "🆓" | "ℹ️" | "ℹ" | "🆔" | "Ⓜ️" | "Ⓜ" | "🆕" | "🆖" | "🅾️" | "🅾" | "🆗" | "🅿️" | "🅿" | "🆘" | "🆙" | "🆚" | "🈁" | "🈂️" | "🈂" | "🈷️" | "🈷" | "🈶" | "🈯" | "🉐" | "🈹" | "🈚" | "🈲" | "🉑" | "🈸" | "🈴" | "🈳" | "㊗️" | "㊗" | "㊙️" | "㊙" | "🈺" | "🈵" | "🔴" | "🟠" | "🟡" | "🟢" | "🔵" | "🟣" | "🟤" | "⚫" | "⚪" | "🟥" | "🟧" | "🟨" | "🟩" | "🟦" | "🟪" | "🟫" | "⬛" | "⬜" | "◼️" | "◼" | "◻️" | "◻" | "◾" | "◽" | "▪️" | "▪" | "▫️" | "▫" | "🔶" | "🔷" | "🔸" | "🔹" | "🔺" | "🔻" | "💠" | "🔘" | "🔳" | "🔲" | "🏁" | "🚩" | "🎌" | "🏴" | "🏳️" | "🏳" | "🏳️‍🌈" | "🏳‍🌈" | "🏳️‍⚧️" | "🏴‍☠️" | "🏴‍☠" | "🇦🇨" | "🇦🇩" | "🇦🇪" | "🇦🇫" | "🇦🇬" | "🇦🇮" | "🇦🇱" | "🇦🇲" | "🇦🇴" | "🇦🇶" | "🇦🇷" | "🇦🇸" | "🇦🇹" | "🇦🇺" | "🇦🇼" | "🇦🇽" | "🇦🇿" | "🇧🇦" | "🇧🇧" | "🇧🇩" | "🇧🇪" | "🇧🇫" | "🇧🇬" | "🇧🇭" | "🇧🇮" | "🇧🇯" | "🇧🇱" | "🇧🇲" | "🇧🇳" | "🇧🇴" | "🇧🇶" | "🇧🇷" | "🇧🇸" | "🇧🇹" | "🇧🇻" | "🇧🇼" | "🇧🇾" | "🇧🇿" | "🇨🇦" | "🇨🇨" | "🇨🇩" | "🇨🇫" | "🇨🇬" | "🇨🇭" | "🇨🇮" | "🇨🇰" | "🇨🇱" | "🇨🇲" | "🇨🇳" | "🇨🇴" | "🇨🇵" | "🇨🇷" | "🇨🇺" | "🇨🇻" | "🇨🇼" | "🇨🇽" | "🇨🇾" | "🇨🇿" | "🇩🇪" | "🇩🇬" | "🇩🇯" | "🇩🇰" | "🇩🇲" | "🇩🇴" | "🇩🇿" | "🇪🇦" | "🇪🇨" | "🇪🇪" | "🇪🇬" | "🇪🇭" | "🇪🇷" | "🇪🇸" | "🇪🇹" | "🇪🇺" | "🇫🇮" | "🇫🇯" | "🇫🇰" | "🇫🇲" | "🇫🇴" | "🇫🇷" | "🇬🇦" | "🇬🇧" | "🇬🇩" | "🇬🇪" | "🇬🇫" | "🇬🇬" | "🇬🇭" | "🇬🇮" | "🇬🇱" | "🇬🇲" | "🇬🇳" | "🇬🇵" | "🇬🇶" | "🇬🇷" | "🇬🇸" | "🇬🇹" | "🇬🇺" | "🇬🇼" | "🇬🇾" | "🇭🇰" | "🇭🇲" | "🇭🇳" | "🇭🇷" | "🇭🇹" | "🇭🇺" | "🇮🇨" | "🇮🇩" | "🇮🇪" | "🇮🇱" | "🇮🇲" | "🇮🇳" | "🇮🇴" | "🇮🇶" | "🇮🇷" | "🇮🇸" | "🇮🇹" | "🇯🇪" | "🇯🇲" | "🇯🇴" | "🇯🇵" | "🇰🇪" | "🇰🇬" | "🇰🇭" | "🇰🇮" | "🇰🇲" | "🇰🇳" | "🇰🇵" | "🇰🇷" | "🇰🇼" | "🇰🇾" | "🇰🇿" | "🇱🇦" | "🇱🇧" | "🇱🇨" | "🇱🇮" | "🇱🇰" | "🇱🇷" | "🇱🇸" | "🇱🇹" | "🇱🇺" | "🇱🇻" | "🇱🇾" | "🇲🇦" | "🇲🇨" | "🇲🇩" | "🇲🇪" | "🇲🇫" | "🇲🇬" | "🇲🇭" | "🇲🇰" | "🇲🇱" | "🇲🇲" | "🇲🇳" | "🇲🇴" | "🇲🇵" | "🇲🇶" | "🇲🇷" | "🇲🇸" | "🇲🇹" | "🇲🇺" | "🇲🇻" | "🇲🇼" | "🇲🇽" | "🇲🇾" | "🇲🇿" | "🇳🇦" | "🇳🇨" | "🇳🇪" | "🇳🇫" | "🇳🇬" | "🇳🇮" | "🇳🇱" | "🇳🇴" | "🇳🇵" | "🇳🇷" | "🇳🇺" | "🇳🇿" | "🇴🇲" | "🇵🇦" | "🇵🇪" | "🇵🇫" | "🇵🇬" | "🇵🇭" | "🇵🇰" | "🇵🇱" | "🇵🇲" | "🇵🇳" | "🇵🇷" | "🇵🇸" | "🇵🇹" | "🇵🇼" | "🇵🇾" | "🇶🇦" | "🇷🇪" | "🇷🇴" | "🇷🇸" | "🇷🇺" | "🇷🇼" | "🇸🇦" | "🇸🇧" | "🇸🇨" | "🇸🇩" | "🇸🇪" | "🇸🇬" | "🇸🇭" | "🇸🇮" | "🇸🇯" | "🇸🇰" | "🇸🇱" | "🇸🇲" | "🇸🇳" | "🇸🇴" | "🇸🇷" | "🇸🇸" | "🇸🇹" | "🇸🇻" | "🇸🇽" | "🇸🇾" | "🇸🇿" | "🇹🇦" | "🇹🇨" | "🇹🇩" | "🇹🇫" | "🇹🇬" | "🇹🇭" | "🇹🇯" | "🇹🇰" | "🇹🇱" | "🇹🇲" | "🇹🇳" | "🇹🇴" | "🇹🇷" | "🇹🇹" | "🇹🇻" | "🇹🇼" | "🇹🇿" | "🇺🇦" | "🇺🇬" | "🇺🇲" | "🇺🇳" | "🇺🇸" | "🇺🇾" | "🇺🇿" | "🇻🇦" | "🇻🇨" | "🇻🇪" | "🇻🇬" | "🇻🇮" | "🇻🇳" | "🇻🇺" | "🇼🇫" | "🇼🇸" | "🇽🇰" | "🇾🇪" | "🇾🇹" | "🇿🇦" | "🇿🇲" | "🇿🇼" | "🏴󠁧󠁢󠁥󠁮󠁧󠁿" | "🏴󠁧󠁢󠁳󠁣󠁴󠁿" | "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
type ApiColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red"
  | "gray_background"
  | "brown_background"
  | "orange_background"
  | "yellow_background"
  | "green_background"
  | "blue_background"
  | "purple_background"
  | "pink_background"
  | "red_background";

// api/getList
export type APIPostListResponse = {
  id: string;
  title: string;
  createdAt: string;
}[];

// api/getPage
export type APIPostResponse = {
  title: string;
  createdAt: string;
  hasTableOfContents: boolean;
  blocks: HasChildrenBlockObject[];
};

// children 추가
export interface HasChildrenParagraph
  extends Omit<ParagraphBlockObjectResponse, "paragraph"> {
  paragraph: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children?: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildrenBulletedList
  extends Omit<BulletedListItemBlockObjectResponse, "bulleted_list_item"> {
  bulleted_list_item: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children?: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildrenNumberedList
  extends Omit<NumberedListItemBlockObjectResponse, "numbered_list_item"> {
  numbered_list_item: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children?: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildrenToggle
  extends Omit<ToggleBlockObjectResponse, "toggle"> {
  toggle: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children?: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildrenQuote
  extends Omit<QuoteBlockObjectResponse, "quote"> {
  quote: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children?: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildColumnList
  extends Omit<ColumnListBlockObjectResponse, "column_list"> {
  column_list: {
    children?: Array<HasChildColumn>;
  };
}

export interface HasChildColumn
  extends Omit<ColumnBlockObjectResponse, "column"> {
  column: {
    children?: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildCallout
  extends Omit<CalloutBlockObjectResponse, "callout"> {
  callout: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    icon:
      | {
          type: "emoji";
          emoji: EmojiRequest;
        }
      | null
      | {
          type: "external";
          external: {
            url: string;
          };
        }
      | null
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
        }
      | null;
    children?: Array<HasChildrenBlockObject>;
  };
}

export type HasChildrenBlockObject =
  | BlockObjectResponse
  | HasChildrenParagraph
  | HasChildrenBulletedList
  | HasChildrenNumberedList
  | HasChildrenToggle
  | HasChildrenQuote
  | HasChildColumnList
  | HasChildCallout;

// NotionRenderer
export interface BlockGroup {
  groupType: "bulleted_list_item" | "numbered_list_item";
  blocks: Array<HasChildrenBlockObject>;
}

export type ProcessedBlock = HasChildrenBlockObject | BlockGroup;

export type ProcessedBlockArray = Array<ProcessedBlock>;

// NotionRenderer/RichText
export interface RichTextGroup {
  groupType: "code" | "link";
  richText: Array<RichTextItemResponse | RichTextGroup>;
}

export type ProcessedRichTextItem = RichTextItemResponse | RichTextGroup;

export type ProcessedRichTextArray = Array<ProcessedRichTextItem>;

// NotionRenderer/HeadingLevel<n>
export interface ToggleableHeading1
  extends Omit<Heading1BlockObjectResponse, "heading_1"> {
  heading_1: {
    rich_text: Array<RichTextItemResponse>;
    color?: ApiColor;
    is_toggleable?: boolean;
    children?: Array<HasChildrenBlockObject>;
  };
}

export interface ToggleableHeading2
  extends Omit<Heading2BlockObjectResponse, "heading_2"> {
  heading_2: {
    rich_text: Array<RichTextItemResponse>;
    color?: ApiColor;
    is_toggleable?: boolean;
    children?: Array<HasChildrenBlockObject>;
  };
}

export interface ToggleableHeading3
  extends Omit<Heading3BlockObjectResponse, "heading_3"> {
  heading_3: {
    rich_text: Array<RichTextItemResponse>;
    color?: ApiColor;
    is_toggleable?: boolean;
    children?: Array<HasChildrenBlockObject>;
  };
}
