export default {

    getValue : function (key, culture) {
        if (!key || !culture) return "";

        var value = this.dictionary.filter(el => el.key === key);

        var res;
        switch(culture)
        {
            case "pol": res =  value[0].valuePol;
            break;
            case "eng": res = value[0].valueEng;
            break;
        }

        return res;
    },

    dictionary : 
    [
        {
            key: "Scripts",
            valueEng: "Scripts",
            valuePol: "Lista skryptów"
        },
        {
            key: "Options",
            valueEng: "Options",
            valuePol: "Opcje"
        },
        {
            key: "Show BackCalcs",
            valueEng: "Show BackCalcs",
            valuePol: "Pokaż BackCalcs"
        },
        {
            key: "Preselect",
            valueEng: "Preselect",
            valuePol: "Domyślny wybór"
        },
        {
            key: "Please select",
            valueEng: "--Please select--",
            valuePol: "-Wybierz wartość-"
        },
        {
            key: "Select saved",
            valueEng: "--Select saved--",
            valuePol: "-Wybierz zachowane-"
        },
        {
            key: "Logout",
            valueEng: "Logout",
            valuePol: "Wyloguj"
        },
        {
            key: "SavePromptMessage",
            valueEng: "Please enter name of saving template",
            valuePol: "Proszę o wprowadzenie nazwy skryptu"
        },
        {
            key: "Show scripts/definition",
            valueEng: "Show scripts/definition",
            valuePol: "Pokaż listę/skrypt"
        }
    ]
}