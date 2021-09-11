
export const MainPageReducer= (state,action)=>{
    
    switch (action.type) {
        case 'initial_user':
            return{...state,name:action.name,following:action.following}

        case 'update_field':
            return{...state,[action.field]:action.value}

        case 'update_skills_list':
            return{...state,skills:action.skillList}
  
        case 'remove_mission':
            let stateAfterFilter = state.filter(function(value){return value.title !== action.title;});
        return[...stateAfterFilter]
        
        case 'update_mission':
        let answer;
        action.isDone==='false'?answer=false:answer=true
        let objIndex = state.findIndex((obj => obj.title === action.title));
        state[objIndex].isDone=(!answer)
        return[...state]        
        default:
            break;
    }

}