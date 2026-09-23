import langs from 'src/data/langs'
class Translator {
    ENGLISH  = 'ENGLISH'
    ARABIC = 'ARABIC'

    translate = (lang) => {
        return {
            type: this.ENGLISH,
            payload: langs[lang]
        }
    }

    translateReducer = (state=langs['english'],action) => {
        switch(action.type) {
            case this.ARABIC: 
            case this.ENGLISH: return {...action.payload};
            default: return state 
        }
    }
}

const translator = new Translator();

export default translator;