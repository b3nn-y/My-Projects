package JavaPrograms.codeGrader;

import java.io.File;
import java.io.FileWriter;
import java.util.Scanner;

public class TeacherCodeGrader extends LogInToCodeGrader {
    public void teacher(String username){
        try{
            File f1= new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+username+".txt");
            Scanner scanner = new Scanner(f1);
            String dataFromUserFile="";
            while (scanner.hasNextLine()){
                dataFromUserFile+=scanner.nextLine();
            }


            File f2= new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignments"+".txt");
            Scanner scanner2 = new Scanner(f2);
            String dataFromAssignmentFile="";
            while (scanner2.hasNextLine()){
                dataFromAssignmentFile+=scanner2.nextLine();
            }


            File f3= new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"stats"+".txt");
            Scanner scanner3 = new Scanner(f3);
            String dataFromStatFile="";
            while (scanner3.hasNextLine()){
                dataFromStatFile+=scanner3.nextLine();
            }

            File f4= new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"enrolledStudents"+".txt");
            Scanner scanner4 = new Scanner(f4);
            String dataFromEnrolledStudentsFile="";
            while (scanner4.hasNextLine()){
                dataFromEnrolledStudentsFile+=scanner4.nextLine();
            }
            typingAnimation("Welcome "+dataFromUserFile);
            typingAnimation("Here are your options: ");
            typingAnimation("1. Create Assignment");
            typingAnimation("2. Show all given Assignments");
            typingAnimation("3. Show all the enrolled students");
            typingAnimation("4. Show Stats of all Assignments");

            typingAnimation("Enter your option: ");
            String ans="";
            Scanner s5=new Scanner(System.in);
            while (!ans.equals("1") && !ans.equals("2") && !ans.equals("3") && !ans.equals("4")){
                typingAnimation("Enter your option: ");
                ans=s5.nextLine();

            }
            switch (ans){
                case "1":createAssignment(username);
                break;
                case "2":
                    System.out.println(dataFromAssignmentFile);
                    break;
                case "3":
                    System.out.println(dataFromEnrolledStudentsFile);
                    break;
                case "4":
                    System.out.println(dataFromStatFile);
                    break;
            }
        }
        catch (Exception e){
            System.out.println("Teacher Dashboard");
        }



    }

    public void createAssignment(String username){
        typingAnimation("Enter the name of your assignment! ");
        Scanner sc=new Scanner(System.in);
        String assignmentName=sc.nextLine();
        typingAnimation("Now a file will be opened, type in the working code, So that we can test your student's answer's from the working code!!");
        try{
            Thread.sleep(1000);
            FileWriter f1=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignmentFiles/"+assignmentName+".java",true);
            f1.write("//"+assignmentName+"\n"+"package JavaPrograms.codeGrader.Teachers."+username+".assignmentFiles;\n" +
                    "\n" +
                    "class "+assignmentName+" {\n" +
                    "\n" +
                    "}");
            f1.close();
            ProcessBuilder processBuilder = new ProcessBuilder("xdg-open", "/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignmentFiles/"+assignmentName+".java");
            processBuilder.start();
            typingAnimation("Do you want to give your students a sample skeleton code, So that they can fill in their required part?(yes/no) ");
            String ansToSkel= sc.nextLine().toLowerCase();
            if(ansToSkel.equals("yes")){
                FileWriter f2=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignmentFiles/"+assignmentName+"_Skel"+".java",true);
                f2.write("//"+assignmentName+"\n"+"package JavaPrograms.codeGrader.Teachers."+username+".assignmentFiles;\n" +
                        "\n" +
                        "public class "+assignmentName+"_Skel"+" {\n" +
                        "\n" +
                        "}");
                f2.close();
                ProcessBuilder processBuilder2 = new ProcessBuilder("xdg-open", "/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignmentFiles/"+assignmentName+"_Skel"+".java");
                processBuilder2.start();
            }

            typingAnimation("Alright, One Last Step!");
            typingAnimation("You need to give a sample test case, So that your students can get a idea of the output, then we will test against 10 other inputs from our side using random test cases");
            FileWriter f3=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignmentFiles/"+assignmentName+"_input"+".txt");
            typingAnimation("How many inputs are gonna be in the program? ");
            int numOfInputs= Integer.parseInt(sc.nextLine());
            String inp="";
            for (int i = 1; i <= numOfInputs; i++) {
                typingAnimation("Type in input No."+i);
                inp+=sc.nextLine();
                inp+="\n";

            }
            f3.write(inp);
            f3.close();



            FileWriter f4=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignmentFiles/"+assignmentName+"_input_types"+".txt");
            typingAnimation("Now to test the code against random test cases, I need the datatypes of the inputs that are gonna be given in order.. ");

            String inpType="";
            for (int i = 1; i <= numOfInputs; i++) {
                System.out.println("Available Datatypes");
                System.out.println("1. String\n2. Integer\n3. Boolean\n4.Double\nEnter one of these");
                typingAnimation("Datatype of input"+i);
                inpType+=sc.nextLine();
                inpType+="\n";

            }
            f4.write(inpType);
            f4.close();

            FileWriter f5= new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignments"+".txt",true);
            f5.write(assignmentName+"\n");
            f5.close();

        }
        catch (Exception e){
            System.out.println("Error on creating assignment");
            System.out.println(e.getMessage());
        }
        typingAnimation("Assignment Created!!");
        typingAnimation("Sending you back to your dashboard");
        teacher(username);
    }


    public static void main(String[] args) {
        TeacherCodeGrader t=new TeacherCodeGrader();
        t.createAssignment("testteacher1");
    }
}
