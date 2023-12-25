package JavaPrograms.codeGrader;

import java.util.Scanner;

public class LogInToCodeGrader extends SignUpToCodeGrader {

    public void LogIn(){
        typingAnimation("Hi there!!");
        typingAnimation("Please enter your Username!! ");
        Scanner s= new Scanner(System.in);
        String user= s.nextLine();
        boolean FirstTry=true;
        while (!userNameVerifier(user) && FirstTry){
            typingAnimation("Your username does not seem to exist in our database, Try again or Sign up");
            typingAnimation("Please enter your Username again!! ");
            user= s.nextLine();
            FirstTry=false;
        }
        if(!userNameVerifier(user)){
            return;
        }
        typingAnimation("Welcome "+user+", Please enter your password!");
        String pass=s.nextLine();
        String encriptedPass=encrypt(pass);
        if(userNameAndPassVerifier(user,encriptedPass)){
            typingAnimation("Logged in");
        }
        else{
            typingAnimation("Incorrect Pass");
            typingAnimation("Enter your password again!");

            pass=s.nextLine();
            encriptedPass=encrypt(pass);
            if(userNameAndPassVerifier(user,encriptedPass)){
                typingAnimation("Logged in");
            }
            else{
                typingAnimation("Try logging in later!");
                return;
            }
        }

        String role=getUserRole(user);
        if(role.equals("teacher")){
            TeacherCodeGrader t = new TeacherCodeGrader();
            t.teacher(user);
        }
        else{
            StudentCodeGrader stu = new StudentCodeGrader();
            stu.Student(user);
        }

    }

    public static void main(String[] args) {

        LogInToCodeGrader l= new LogInToCodeGrader();
        l.LogIn();
    }

}
