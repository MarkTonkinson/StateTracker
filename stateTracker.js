
//where would you store the state/updated object? Local Storage? On a server?
//a tool for tracking simple state by string
var stateTrack = {
	//currently these variable are immediate accessible, would want to wrap them in functions?
	state: {
		currentState:'',
		pastState: '',
		stateHistory: []
	},
	setCurrentState: function(str){
		this.setPastState(this.state.currentState)
		this.state.currentState = str
		return this.state.currentState
	},
	setPastState: function(str){
		//do I want this to update history or is it a manual way of handling it
		//does the user need to be abstracted from this?
		
		this.state.pastState = str
		this.setStateHistory(this.state.pastState)
		return this.state.pastState
	},
	setStateHistory: function(str){
		if(str !== ''){
			this.state.stateHistory.push(str)
			return this.state.stateHistory			
		}
	},
	getCurrentState: function(){
		return this.state.currentState
	},
	getPastState: function(){
		return this.state.pastState
	},
	getStateHistory: function(){
		console.log(this.state.stateHistory)
		return this.state.stateHistory
	},

	currentState:'Home',
	pastState: 'Login',
	stateHistory: ['Login'],
	newState: function(nameStr){
		if(!stateTrack[nameStr] && typeof nameStr !== "object"){
			stateTrack[nameStr] = nameStr
			//console.log(stateTrack)
			return true
		} else {
			console.log('stateTrack.newState('+ nameStr + ") is an illegal name")
			return false
		}
		
	},
	changeState: function(nextState){
		if(!this[nextState]){
			if(this.newState(nextState)){
				//console.log('current: ', this.state.currentState, 'past: ', this.state.pastState, 'next: ', nextState)
				currentState = this.getCurrentState()
				this.setStateHistory(currentState)
				this.setPastState(currentState)
				this.setCurrentState(nextState)
				return this.getCurrentState()
				//console.log('current: ', this.currentState, 'past: ', this.pastState)
			} else {
				console.log('error')
				return false;
			}
		} else {
			console.log('error')
			return false
		}
	},
	wipeHistory: function(){
		this.state.stateHistory = [];
		return this.stateHistory
	}
}
//newstate must have a valid string that doesn't have spaces in it
// stateTrack.newState("NewPlace")
// stateTrack.changeState('YeOldeMarket')
// stateTrack.newState("NewPlace") //expect illegal name
// stateTrack.newState({hello: 'world'}) //expect illegal name
// console.log(stateTrack.NewPlace)
// console.log(stateTrack.state.stateHistory)
// stateTrack.changeState('HelloWorld')
// console.log(stateTrack.state.stateHistory)
//console.log(stateTrack.wipeHistory());




module.exports = stateTrack;

