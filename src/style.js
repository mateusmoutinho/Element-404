
let Element404Style = {


    /**
     * @param {object} style_value
     * @return {string}
     * * */
    create_object_style(style_value){

        if(style_value['mergeIf']){
            let evaluation_result = Element404Extras.get_func_result(style_value['mergeIf'])
            if(!evaluation_result){
                return ""
            }
        }

        let style_string = ""

        for (const key in style_value){
            let value = Element404Extras.get_func_result(style_value[key])

            if(key === 'mergeif'){
                continue;
            }

            if(value.constructor.name === 'Object'){

                style_string+=this.create_object_style(value)
                continue;
            }

            style_string+=`${key}:${value};`
        }

        return style_string
    },


    /**
     * @param {string || Array || object} value
     * @returns {string}
     * */
    create_style(value){

            if(value instanceof  String){
                return value
            }

            if(value.constructor.name ===  'Object'){
                return this.create_object_style(value)
            }

    }
}