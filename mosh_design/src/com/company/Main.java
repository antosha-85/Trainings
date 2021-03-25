package com.company;

import com.company.memento.Editor;

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
        editor.setContent("a");
        editor.setContent("b");
        editor.setContent("c");
        editor.undo();
   }
    public static void drawUIControl(UIControl control) {
        control.draw();
    }
    public static TaxCalculator getCalculator() {
        return new TaxCalculator2019();
    }

}
