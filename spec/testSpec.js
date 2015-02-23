var stateTrack = require('../stateTracker.js')

describe('Tracker Test Suite', function(){
	var newState = "NewPlace"
	var changedState = "ChangedState"
	var pastState = "PastState"
	//trying to compare doesn't work because the object is an exact reference
	//var stateHistoryEmpty = []
	//var stateHistory = ['NewPlace']
	


	it('should get empty current state intially', function(){
		var test = stateTrack.getCurrentState()
		expect(test).toBe('')
	})

	it('should get empty past state intially', function(){
		var test = stateTrack.getCurrentState()
		expect(test).toBe('')
	})

	it('should get empty state history intially', function(){
		var test = stateTrack.getStateHistory()
		expect(typeof test).toBe('object')
		expect(test[0]).toBe(undefined)
		expect(test.length).toBe(0)
	})

	
	it('should set current state', function(){
		var test = stateTrack.setCurrentState(newState)
		var past = stateTrack.getPastState()
		var history = stateTrack.getStateHistory()
		expect(test).toBe(newState)
		expect(past).toBe('')
		expect(typeof history).toBe('object')
		expect(history[0]).toBe(undefined)
		expect(history.length).toBe(0)

	})

	it('should set past and history state with new current state', function(){
		var test = stateTrack.setCurrentState(changedState)
		var past = stateTrack.getPastState()
		var history = stateTrack.getStateHistory()
		expect(test).toBe(changedState)
		expect(past).toBe(newState)
		expect(typeof history).toBe('object')
		expect(history.length).toBe(1)
		expect(history[0]).toBe('NewPlace')
	})


	it('should create new state', function(){
		
		var test = stateTrack.newState(newState)
		expect(test).toBe(true)
	})

	it('should reject new states of the same name', function(){
		var newState = "NewPlace"
		var test = stateTrack.newState(newState)
		expect(test).toBe(false)
	})

	it('should change state', function(){
		var state = "ChangedState"
		var test = stateTrack.changeState(state)
		expect(test).toBe(state)
	})

	it('should not change if state exists', function(){
		var state = "ChangedState"
		var test = stateTrack.changeState(state)
		expect(test).toBe(false)
	})

	

})