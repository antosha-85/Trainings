package com.company;

import com.company.memento.Editor;
import com.company.memento.History;
import com.company.state.BrushTool;
import com.company.state.Canvas;
import com.company.state.EraserTool;
import com.company.state.SelectionTool;
import com.company.state.abuse.Stopwatch;

public class Main {

    public static void main(String[] args) {
	    User user = new User("Anton", 30);
//      System.out.println(user.name);
        user.sayHello();
        TaxCalculator calculator = getCalculator();
        calculator.calculateTax();
        var account = new Account();
        account.deposit(10);
        account.withdraw(5);
        System.out.println(account.getBalance());
        var mailService = new MailService();
        mailService.sendEmail();
        var textBox = new UIControl() {
            @Override
            public void draw() {

            }
        };
        textBox.enable();
        // Text Box
        // Button
        // CheckBox
        //enable()
        // focus()
        // setPosition()
        drawUIControl(new CheckBox());

        var editor = new Editor();
        var history = new History();

        editor.setContent("a");
        history.push(editor.createState());

        editor.setContent("b");
        history.push(editor.createState());

        editor.setContent("c");
        editor.restore(history.pop());
        editor.restore(history.pop());

        System.out.println(editor.getContent());

        var canvas = new Canvas();
        canvas.setCurrentTool(new EraserTool());
        canvas.mouseDown();
        canvas.mouseUp();

        var stopwatch = new Stopwatch();
        stopwatch.click();
        stopwatch.click();
   }
    public static void drawUIControl(UIControl control) {
        control.draw();
    }
    public static TaxCalculator getCalculator() {
        return new TaxCalculator2019();
    }

}
