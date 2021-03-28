package com.company.state.abuse;

public class StartedState implements State {
    private Stopwatch stopwatch;
    public StartedState(Stopwatch stopwatch) {
        this.stopwatch = stopwatch;
    }
    @Override
    public void click() {
        stopwatch.setCurrentState(new StoppedState(stopwatch));
        System.out.println("Stopped");
    }
}
