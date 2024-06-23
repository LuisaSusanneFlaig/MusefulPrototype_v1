import { useMemo } from "react";
import IPhoneAlphabetQWERTY from "./IPhoneAlphabetQWERTY";
import LayoutDefaultWithMicTheme from "./LayoutDefaultWithMicTheme";
import PropTypes from "prop-types";
import styles from "./KeyboardsIPhone.module.css";

const KeyboardsIPhone = ({
  className = "",
  keysLetterMarginRight,
  keysLetterWidth,
  keysLetterAlignSelf,
}) => {
  const keyboardsIPhoneStyle = useMemo(() => {
    return {
      marginRight: keysLetterMarginRight,
      width: keysLetterWidth,
      alignSelf: keysLetterAlignSelf,
    };
  }, [keysLetterMarginRight, keysLetterWidth, keysLetterAlignSelf]);

  return (
    <div
      className={[styles.keyboardsIphone, className].join(" ")}
      style={keyboardsIPhoneStyle}
    >
      <IPhoneAlphabetQWERTY />
      <LayoutDefaultWithMicTheme
        keysIcon="/emoji.svg"
        emoji="/-keys--icon2.svg"
        layoutDefaultWithMicThemePosition="relative"
        layoutDefaultWithMicThemeHeight="49px"
        layoutDefaultWithMicThemeDisplay="unset"
        layoutDefaultWithMicThemeFlexDirection="unset"
        layoutDefaultWithMicThemeFlexWrap="unset"
        layoutDefaultWithMicThemePadding="unset"
        layoutDefaultWithMicThemeGap="unset"
        frameDivPosition="absolute"
        frameDivHeight="calc(100% - 6px)"
        frameDivTop="3px"
        frameDivBottom="3px"
        frameDivLeft="3px"
        frameDivDisplay="unset"
        frameDivFlexDirection="unset"
        frameDivGap="unset"
        keysLabelPosition="absolute"
        keysLabelHeight="100%"
        keysLabelWidth="calc(100% - 85px)"
        keysLabelTop="0px"
        keysLabelRight="85px"
        keysLabelBottom="0px"
        keysLabelLeft="0px"
        keysLabelFlex="unset"
        keysLabelDisplay="unset"
        keysLabelFlexDirection="unset"
        keysLabelPadding="unset"
        letterPosition="absolute"
        letterWidth="100%"
        letterTop="calc(50% - 9.5px)"
        letterLeft="0px"
        letterDisplay="inline-block"
        letterFlex="unset"
        keysIconPosition="absolute"
        keysIconHeight="100%"
        keysIconWidth="calc(100% - 85px)"
        keysIconTop="0px"
        keysIconRight="38px"
        keysIconBottom="0px"
        keysIconLeft="47px"
        keysIconOverflow="hidden"
        keysIconMaxHeight="100%"
        keysIconMinHeight="unset"
        emojiIconPosition="absolute"
        emojiIconHeight="calc(100% - 1px)"
        emojiIconWidth="calc(100% - 94px)"
        emojiIconTop="0px"
        emojiIconRight="0px"
        emojiIconBottom="1px"
        emojiIconLeft="94px"
        emojiIconOverflow="hidden"
        emojiIconMaxHeight="100%"
        spacePosition="absolute"
        spaceHeight="calc(100% - 6px)"
        spaceWidth="calc(100% - 232px)"
        spaceTop="3px"
        spaceRight="97px"
        spaceBottom="3px"
        spaceLeft="135px"
        spaceFlex="unset"
        spaceDisplay="unset"
        spaceFlexDirection="unset"
        spacePadding="unset"
        spaceMinWidth="unset"
        letterPosition1="absolute"
        letterWidth1="calc(100% - 31px)"
        letterTop1="calc(50% - 9.5px)"
        letterLeft1="0px"
        letterDisplay1="inline-block"
        letterFlex1="unset"
        keysLabelPosition1="absolute"
        keysLabelHeight1="calc(100% - 6px)"
        keysLabelTop1="3px"
        keysLabelRight1="3px"
        keysLabelBottom1="3px"
        keysLabelDisplay1="unset"
        keysLabelFlexDirection1="unset"
        keysLabelPadding1="unset"
        letterPosition2="absolute"
        letterWidth2="100%"
        letterTop2="calc(50% - 9.5px)"
        letterLeft2="0px"
        letterDisplay2="inline-block"
        letterFlex2="unset"
      />
    </div>
  );
};

KeyboardsIPhone.propTypes = {
  className: PropTypes.string,

  /** Style props */
  keysLetterMarginRight: PropTypes.any,
  keysLetterWidth: PropTypes.any,
  keysLetterAlignSelf: PropTypes.any,
};

export default KeyboardsIPhone;
