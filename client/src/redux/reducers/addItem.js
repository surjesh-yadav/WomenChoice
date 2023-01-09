import * as actionTypes from "../actions/index";
const initialState={
    products:[]  ,
    product:{},
    loading:false,
    filters:"",
    users:[],
    user:null,
  }
 
 const cartItem={
     cartdata:[]
 }
  
 
 export const cartReducer=(state=cartItem,{type,payload})=>{

  switch(type){
      case actionTypes.CART :
          return {...state,cartdata:[payload]};

          case actionTypes.LOGIN:
            return {
                ...state,
                user:payload,
                isLoggedIn: true
            }
          

            case actionTypes.SIGNUP:
                return { "users": payload};


          default:
              return state;
  
  }
  }

  export const reducer=(state=initialState,{type,payload})=>{
      console.log(state,"products")
    switch(type){
        case actionTypes.GET_DATA:
            return {...state,products:payload,loading:false};
           
            case actionTypes.LOADING:
                return {...state,loading:true};
        
            case actionTypes.GET_PROD_DETAILS:
            return {...state,product:payload};
    
          

            
            default:
                return state;
    
    }
    }


    export const top=(state=initialState,{type,payload})=>{
        console.log(state,"products")
      switch(type){
        
                  case actionTypes.GET_DATA_TOP:
                      return {...state,products:payload,loading:false};
              case actionTypes.LOADING:
                  return {...state,loading:true};
          
              case actionTypes.GET_PROD_DETAILS:
              return {...state,product:payload};
      
            
  
              
              default:
                  return state;
      
      }
      }

      
    export const kurti=(state=initialState,{type,payload})=>{
        console.log(state,"products")
      switch(type){
             
        case actionTypes.GET_DATA_KURTIS:
            return {...state,products:payload,loading:false};
                
              case actionTypes.LOADING:
                  return {...state,loading:true};
          
              case actionTypes.GET_PROD_DETAILS:
              return {...state,product:payload};
      
            
  
              
              default:
                  return state;
      
      }
      }


const addItem=[];
export const addItems = (state=addItem,action)=>{
    switch(action.type){
        case "ADDITEM":
            return [
            ...state,
            action.payload
        ]
        case "UPDATEADD":
                return [...state];
        case "DELETECART":
                return [];
        case 'DELITEM':
            return state=state.filter((x)=>{
                return x.id !== action.payload.id
            })

            default:
                return state;
    }
}
