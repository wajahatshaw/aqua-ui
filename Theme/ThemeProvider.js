import {GREY_LINE, PRIMARY_BLUE, SETTING_BG, WHITE} from "./colors";
import {Dimensions} from "react-native";

export const Theme = {
        divider: {
            backgroundColor: GREY_LINE,
            height: 1,
        },
    content: {
        backgroundColor: SETTING_BG,
        marginHorizontal: Dimensions.get('window').width >= 1024 ? 300 : 0,
    },
    buttonStyle: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: PRIMARY_BLUE,
    },
    textStyle: {
        fontSize: 18,
        fontFamily: 'SFProDisplay-Regular'
    },
    whiteButton: {
      backgroundColor: WHITE
    },
    whiteButtonContainer: {
        marginTop: 20,
    },
    whiteButtonTitle: {
        color: 'red',
        fontFamily: 'SFProDisplay-Regular',
    },
}
