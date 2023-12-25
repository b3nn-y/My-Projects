package JavaPrograms.codeGrader;

import java.io.File;
import java.io.FileWriter;
import java.util.*;

public class StudentCodeGrader extends LogInToCodeGrader{
    public void Student(String username){
        typingAnimation("Hi "+ username);
        typingAnimation("Choose your desired option: ");
        typingAnimation("1. Submit Code");
        typingAnimation("2. View finished assignments");

    }

    public void submitCode(String usernameOfStudent){
        String availableAssignments="";
        String teachers="";
        String teachers2="";
        int assignmentCount=1;
        Dictionary dict = new Hashtable();
        try{
            typingAnimation("These are the available assignments </>");
            System.out.println();
            System.out.println();
            Thread.sleep(1000);
            File f = new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/userdata/usrpass.txt");
            Scanner fileReader=new Scanner(f);
            while (fileReader.hasNextLine()){
                teachers+= fileReader.nextLine();
                teachers+="\n";
            }
//            System.out.println(teachers);
            String[] t1=teachers.split("\n");
            for (int i = 0; i < t1.length; i++) {
                String temp[]=t1[i].split("\t");

                if(temp.length>2){
                    if(temp[3].equals("teacher")){
                        teachers2+=temp[0];
//                    System.out.println(temp[0]);
                        teachers2+="\t";
                    }
                }


            }

//            System.out.println(teachers2);

            String[] availableTeacher=teachers2.split("\t");

            for (int i = 0; i < availableTeacher.length; i++) {
                String assignments="";
                File assignmentReader=new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+availableTeacher[i]+"/assignments.txt");
                try{
                    Scanner s=new Scanner(assignmentReader);
                    while (s.hasNextLine()){
                        assignments+=s.nextLine();
                        assignments+="\n";
                    }
                }
                catch (Exception e){
                    System.out.println("Assignment reader");
                }


                String assignmentsInList[]=assignments.split("\n");


                for (int j = 0; j < assignmentsInList.length; j++) {
                    typingAnimation(assignmentCount+". "+assignmentsInList[j] + "  by "+availableTeacher[i]);
//                    System.out.println(assignmentCount+". "+assignmentsInList[j]);
                    String[] temp= {assignmentsInList[j],availableTeacher[i]};
//                    for (int k = 0; k < temp.length; k++) {
//                        System.out.println(temp[k]);
//                    }
                    dict.put(assignmentCount,temp);
                    assignmentCount++;

                }

            }


        }
        catch (Exception e){
            System.out.println("Error from student database");
            System.out.println(e.getMessage());
            e.printStackTrace();
        }




        Scanner consoleReader = new Scanner(System.in);
        int tempCount= assignmentCount+10;

        while(tempCount < 1 || tempCount > assignmentCount){
            typingAnimation("Now enter the number of your desired assignment");
            tempCount=Integer.parseInt(consoleReader.nextLine());
        }
        String[] assignmentKey= (String[]) dict.get(tempCount);
        loadAssignment(assignmentKey,usernameOfStudent);








    }



    public void loadAssignment(String[] assignmentKeys,String username){
        try {
            FileWriter f1 = new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/Assignments/"+assignmentKeys[0]+"_code.java",true);
            String skelCode="";

            try{
                File f2 = new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+assignmentKeys[1]+"/assignmentFiles/"+assignmentKeys[0]+"_Skel.java");
                Scanner readSkelCode= new Scanner(f2);
                while (readSkelCode.hasNextLine()){
                    skelCode+=readSkelCode.nextLine();
                    skelCode+="\n";
                }


            }
            catch (Exception e){
                System.out.println("Skeleton Code Not Present ");
            }

            if(skelCode.length()>5){

                skelCode=skelCode.replace(("package JavaPrograms.codeGrader.Teachers."+assignmentKeys[1]+".assignmentFiles;"),"package JavaPrograms.codeGrader.Students."+username+".Assignments;");
                skelCode=skelCode.replace(assignmentKeys[0]+"_Skel",assignmentKeys[0]+"_code");
                String tempContainer="";
                try{
                    File tempReader = new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/Assignments/"+assignmentKeys[0]+".java");
                    Scanner tempR = new Scanner(tempContainer);
                    while (tempR.hasNextLine()){
                        tempContainer+=tempR.nextLine();
                    }
                }
                catch (Exception ee){

                }

                if(tempContainer.length()<10){
                    f1.write(skelCode);
                    f1.close();
                }
            }
            else{
                skelCode="//"+assignmentKeys[0]+"\n"+"package JavaPrograms.codeGrader.Students."+username+".Assignments;\n" +
                        "\n" +
                        "class "+assignmentKeys[0]+"_code"+" {\n" +
                        "\n" +
                        "}";
                String tempContainer="";
                try{
                    File tempReader = new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/Assignments/"+assignmentKeys[0]+".java");
                    Scanner tempR = new Scanner(tempContainer);
                    while (tempR.hasNextLine()){
                        tempContainer+=tempR.nextLine();
                    }
                }
                catch (Exception ee){

                }

                if(tempContainer.length()<10){
                    f1.write(skelCode);
                    f1.close();
                }
            }
            typingAnimation("The code window will be opened soon...");
            typingAnimation("Type in your code to the particular question given in the comments and save the file.");
            typingAnimation("Here is a example test case for you!");
            CodeCompiler code = new CodeCompiler("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+assignmentKeys[1]+"/assignmentFiles/");
            List<String> commands = Arrays.asList("bash", "-c"," java "+assignmentKeys[0]+".java < "+assignmentKeys[0]+"_input.txt;");
            String inputs="";
            int inpCount=1;
            try{
                File inputReader = new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+assignmentKeys[1]+"/assignmentFiles/"+assignmentKeys[0]+"_input.txt");
                Scanner inpReader = new Scanner(inputReader);
                while (inpReader.hasNextLine()){
                    String tempInput=inpReader.nextLine();
                    inputs+=tempInput;
                    inputs+="\n";
                    typingAnimation("Input "+inpCount++ +" => "+tempInput);

                }
            }


            catch (Exception e){
                System.out.println("Error on input file reading");
            }
            typingAnimation("The output for those input is...");
            String[] output = code.runCommands(commands);
//            System.out.println(output[0]);
//            System.out.println(output[1]);

            typingAnimation("After saving the file, type done here to run test cases to your code!");
            typingAnimation("Code window opening in...");
            typingAnimation("3");
            Thread.sleep(1000);
            typingAnimation("2");
            Thread.sleep(1000);
            typingAnimation("1");
            Thread.sleep(1000);
            ProcessBuilder processBuilder = new ProcessBuilder("xdg-open", "/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/"+"Assignments/"+assignmentKeys[0]+"_code.java");
            processBuilder.start();

            Scanner scanner = new Scanner(System.in);
            String d= "";
            while (d.length()<1){
                d= scanner.nextLine();
            }
            typingAnimation("Hope you have saved the file running the test cases.");

            CodeCompiler code2 = new CodeCompiler("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/"+"Assignments/");
            FileWriter inputWriter = new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/"+"Assignments/input.txt");
            inputWriter.write(inputs);
            inputWriter.close();
            List<String> command2 = Arrays.asList("bash", "-c"," java "+assignmentKeys[0]+"_code.java < input.txt;");
            String output2[] = code2.runCommands(command2);
            if(output[0].equals(output2[0]) && output[1].equals(output2[1])  ){

            }
            else{
                while(!output[0].equals(output2[0]) || !output[1].equals(output2[1])  ){
                    typingAnimation("Looks like you are wrong, Try editing the code and submit again");
                    processBuilder.start();
                    String d2= "";
                    while (d2.length()<1){
                        d2= scanner.nextLine();

                    }
                    output2 = code2.runCommands(command2);
                }
            }
            typingAnimation("Looks like you have nailed it!!");
            typingAnimation("You have passed the first test case!");
            typingAnimation("Time to run Random Test Cases");

            String inputTypes="";
            try{
                File inputTypeReader = new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+assignmentKeys[1]+"/assignmentFiles/"+assignmentKeys[0]+"_input_types.txt");
                Scanner inpTypR = new Scanner(inputTypeReader);
                while (inpTypR.hasNextLine()){
                    inputTypes+=inpTypR.nextLine();
                    inputTypes+="\n";
                }
            }
            catch (Exception a){

            }
            String inpData[];

            inpData = inputTypes.split("\n");
            int tesCaseNo = 1;
            for (int j = 0; j <10 ; j++) {

                String inputs2 = "";
                int inpC=1;
                for (int i = 0; i < inpData.length; i++) {
                    String tempIn="";
                    if(inpData[i].equals("Integer")){
                        tempIn+=testCaseInt();
                        inputs2+=tempIn;
                        inputs2+="\n";
                    } else if (inpData[i].equals("String")) {
                        tempIn+=testCaseString();
                        inputs2+=tempIn;
                        inputs2+="\n";
                    }
                    typingAnimation("Input "+inpC+": "+tempIn);

                }

                FileWriter inputWriter1 = new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+assignmentKeys[1]+"/assignmentFiles/"+"input.txt");
                FileWriter inputWriter2 = new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/"+"Assignments/input.txt");
                inputWriter1.write(inputs2);
                inputWriter2.write(inputs2);
                List<String> command3 = Arrays.asList("bash", "-c"," java "+assignmentKeys[0]+".java < input.txt;");
                inputWriter1.close();
                inputWriter2.close();
                typingAnimation("Running your teacher's code");
                CodeCompiler code3 = new CodeCompiler("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+assignmentKeys[1]+"/assignmentFiles/");
                output = code3.runCommands(command3);
                typingAnimation("Running your code...");
                CodeCompiler code4= new CodeCompiler("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/"+"Assignments/");
                output2 = code4.runCommands(command2);

                if(output[0].equals(output2[0]) && output[1].equals(output2[1])  ){

                }
                else{
                    while(!output[0].equals(output2[0]) || !output[1].equals(output2[1])  ){
                        typingAnimation("Looks like you are wrong, Try editing the code and submit again");
                        processBuilder.start();
                        String d2= "";
                        while (d2.length()<1){
                            d2= scanner.nextLine();

                        }
                        output2 = code2.runCommands(command2);
                    }
                }
                typingAnimation("Looks like you have nailed it!!");
                typingAnimation("You have passed the test case: "+tesCaseNo++);






            }
            FileWriter inputWriter1 = new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+assignmentKeys[1]+"/assignmentFiles/"+assignmentKeys[0]+"_input.txt");
            FileWriter inputWriter2 = new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/"+"Assignments/input.txt");
            inputWriter1.write(inputs);
            inputWriter2.write(inputs);
            inputWriter1.close();
            inputWriter2.close();
            typingAnimation("Great");







        }
        catch (Exception e){
            System.out.println("Error on Loading assignment");
            e.printStackTrace();
        }

    }
    public static void main(String[] args) {
        StudentCodeGrader s = new StudentCodeGrader();
        s.submitCode("samuel");
    }

    public String testCaseString(){
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        Random random = new Random();
        int length = random.nextInt(30 - 5 + 1) + 5;
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(characters.length());
            char randomChar = characters.charAt(randomIndex);
            stringBuilder.append(randomChar);
        }

        return stringBuilder.toString();
    }
    public int testCaseInt(){
        Random random = new Random();
        return random.nextInt(9000000 - 0 + 1) + 0;
    }

}
