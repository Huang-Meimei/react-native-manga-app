import { DimensionValue, Dimensions } from "react-native";
import { COLORS } from "./theme";

type ThemeColorTemplate = {
    backgroundColor:string,
    color: string
}

type ThemeTemplate = {
    transparent:ThemeColorTemplate;
    inversed:ThemeColorTemplate;
    color:string;
    backgroundColor:string;
    shadowColor:string
}

export type SizeType = {
    width?:DimensionValue,
    height?:DimensionValue,
    font?:number,
}

export enum THEME{
    dark='dark', light='light'
}

export interface SizesType{
    s:SizeType,
    m:SizeType,
    b:SizeType,
    f:SizeType,
    default:SizeType,
    bottomSheet:{
        nickName:SizeType
    },
    featuredRow:{
        image:SizeType
    },
    mangaDisplay:{
        image:SizeType,
        title:SizeType,
        popular:SizeType,
        updatedTime:SizeType,
        infoDispaly:SizeType
    }
}

export const SIZES:SizesType={
    s:{width:50,height:50,font:12},
    m:{width:75,height:75,font:15},
    b:{width:130,height:190,font:30},
    f:{width:Dimensions.get("window").width,height:200,font:22},
    default:{width:"100%",height:"100%",font:22},
    bottomSheet:{
        nickName:{font:20}
    },
    featuredRow:{
        image:{width:155,height:190,font:15},
    },
    mangaDisplay:{
        image:{width:125,height:190,font:15},
        title:{width:125,height:52,font:15},
        popular:{width:125,height:10,font:12},
        updatedTime:{width:125,height:10,font:12},
        infoDispaly:{width:125,height:250,font:12}
    }
}

export const ThemeDetails: Map<THEME|undefined,ThemeTemplate> = new Map([
    [THEME.dark, {
        inversed: {
            backgroundColor:COLORS.secondaryWhite,
            color: COLORS.secondaryDark
        },
        default: {
            backgroundColor:COLORS.secondaryDark,
            color:COLORS.secondaryWhite,
        },
        transparent: {
            backgroundColor:'transparent',
            color:COLORS.secondaryWhite
        },
        backgroundColor:COLORS.primaryDark,
        color:COLORS.secondaryWhite,
        shadowColor:COLORS.shadowAbbey
    }],
    [THEME.light, {
        inversed: {
            backgroundColor:COLORS.secondaryDark,
            color: COLORS.secondaryWhite,
        },
        default: {
            backgroundColor:'rgb(239,243,249)',
            color:"rgb(180,180,180)",
        },
        transparent: {
            backgroundColor:'transparent',
            color:"rgb(105,117,132)"
        },
        backgroundColor:COLORS.primaryWhite,
        color:COLORS.primaryDark,
        shadowColor:COLORS.shadowLavender
    }]
])

