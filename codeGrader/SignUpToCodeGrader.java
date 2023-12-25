package JavaPrograms.codeGrader;
import javax.sound.sampled.*;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class SignUpToCodeGrader {

    public void createNewAcc(){
        try{
            System.out.print("\n" + "dP   dP   dP          dP                                                                              d888888P          \n" );
            Thread.sleep(200);
            System.out.print("88   88   88          88                                                                                 88             \n");
            Thread.sleep(170);
            System.out.print("88  .8P  .8P .d8888b. 88 .d8888b. .d8888b. 88d8b.d8b. .d8888b.                                           88    .d8888b. \n" );
            Thread.sleep(150);
            System.out.print("88  d8'  d8' 88ooood8 88 88'  `\"\" 88'  `88 88'`88'`88 88ooood8                                           88    88'  `88 \n");
            Thread.sleep(120);
            System.out.print("88.d8P8.d8P  88.  ... 88 88.  ... 88.  .88 88  88  88 88.  ...                                           88    88.  .88 \n" );
            Thread.sleep(100);
            System.out.print("88.d8P8.d8P  88.  ... 88 88.  ... 88.  .88 88  88  88 88.  ...                                           88    88.  .88 \n");
            Thread.sleep(130);
            System.out.print("8888' Y88'   `88888P' dP `88888P' `88888P' dP  dP  dP `88888P'                                           dP    `88888P' \n");
            Thread.sleep(150);
            System.out.print("                                                               oooooooooooo oooooooooooo oooooooooooo                   \n" +
                    "    ");
            Thread.sleep(200);

            System.out.print("\n" + "     ,gggg,                                 \n" );
            Thread.sleep(200);
            System.out.print("   ,88\"\"\"Y8b,                   8I          \n");
            Thread.sleep(180);
            System.out.print("  d8\"     `Y8                   8I          \n" );
            Thread.sleep(170);
            System.out.print(" d8'   8b  d8                   8I          \n" );
            Thread.sleep(150);
            System.out.print(",8I    \"Y88P'                   8I          \n");
            Thread.sleep(130);
            System.out.print("I8'            ,ggggg,    ,gggg,8I   ,ggg,  \n" );
            Thread.sleep(100);
            System.out.print("d8            dP\"  \"Y8gggdP\"  \"Y8I  i8\" \"8i \n" );
            Thread.sleep(150);
            System.out.print( "Y8,          i8'    ,8I i8'    ,8I  I8, ,8I \n" );
            Thread.sleep(180);
            System.out.print("`Yba,,_____,,d8,   ,d8',d8,   ,d8b, `YbadP' \n");
            Thread.sleep(200);
            System.out.println("  `\"Y8888888P\"Y8888P\"  P\"Y8888P\"`Y8888P\"Y888");

            Thread.sleep(200);

            System.out.print("\n" + "        8888888                                        888                   \n");
            Thread.sleep(200);
            System.out.print("          888                                          888                   \n");
            Thread.sleep(190);
            System.out.print("          888                                          888                   \n" );
            Thread.sleep(180);
            System.out.print("          888  88888b. .d8888b 88888b.  .d88b.  .d8888b888888 .d88b. 888d888 \n" );
            Thread.sleep(170);
            System.out.print("          888  888 \"88b88K     888 \"88bd8P  Y8bd88P\"   888   d88\"\"88b888P\"   \n" );
            Thread.sleep(150);
            System.out.print("          888  888  888\"Y8888b.888  88888888888888     888   888  888888     \n");
            Thread.sleep(160);
            System.out.print("          888  888  888     X88888 d88PY8b.    Y88b.   Y88b. Y88..88P888     \n" );
            Thread.sleep(170);
            System.out.print("888888888888888888  888 88888P'88888P\"  \"Y8888  \"Y8888P \"Y888 \"Y88P\" 888     \n");
            Thread.sleep(180);
            System.out.print("                               888                                           \n" );
            Thread.sleep(190);
            System.out.print("                               888                                           \n" );
            Thread.sleep(200);

            System.out.print("                               888                                           \n");
            Thread.sleep(200);
            String icon = ("                                                                                                    \n" +

                    "                                                                                                    \n" +
                    "                                         ........................                                   \n" +
                    "                                         ..********************...                                  \n" +
                    "                                        ...********************,..                                  \n" +
                    "                                    *@@...**********************...                                 \n" +
                    "                               @@@@@@@#..************************...                                \n" +
                    "                           @@@@@@@@@@@...************************,..                                \n" +
                    "                         @@@..................................................                      \n" +
                    "                     ..,@@@@...********************************************...                      \n" +
                    "                    *@@@@@@@@%...............................................                       \n" +
                    "                   @@@@@@@@@@@@@@@@*...&&#...***...&&&&...***...,&&/...@@@                          \n" +
                    "                  @@@@@@@@@@@@@@@@@...&&&...*****........*****...&&&...@@@@                         \n" +
                    "                 @@@@@@@@@@@@@@@@@@#..%&&&.........&&&&.........%&&&...@@@@@                        \n" +
                    "                &@@@@@@@@@@@@@@@@@@@@....&&&&/*(&&&&&&&&&&#*/&&&&....@@@@@@@  ......                \n" +
                    "                @@@@@@@@@@@@@@@@@@@@@@#..&&&&&&&&&&&&&&&&&&&&&&&&...@@@@@@@@@...  ...               \n" +
                    "                @@@@@@@......@@@@@@@@@#..&&&&&&&&*.......&&&&&&&&...@@@@@@@@@ ......                \n" +
                    "                @@@@@@#......@@@@@@@@@&..%&&&&&&&&#....,&&&&&&&&&..,@@@@@@@@@                       \n" +
                    "                @@@@@@@@@@@@@@@@@@@@@@@...&&&&&&&&&&&&&&&&&&&&&&...@@@@@@@@@@                       \n" +
                    "                @@@@@@@@@@@@@@@@@@@@@@@@...,&&&&&&&&&&&&&&&&&&#...@@@@@@@@@@@                       \n" +
                    "                 @@@@@@@@@@@@@@@@@@@@@@@@@....,&&&&&&&&&&&&/....@@@@@@@@@@@@                        \n" +
                    "                  @@@@@@@@@@@@@@@@@@@@/.............................@@@@@@@   .                     \n" +
                    "                  .@@@@@@@@@@@@@@@@@@@@.....****...@@@@/..****.....%@@@@@@    .                     \n" +
                    "                    @@@@@@@@@@@@@@......***....*...@@@@...*....***,.....@                           \n" +
                    "                     ,@@@@@@@@@@...,*********,.....@@@@......**********...                          \n" +
                    "                        @@@@@@@...**************..........**************...                         \n" +
                    "                          @@@@/..*******************..,******************...                        \n" +
                    "                             /*..*******************..,******************...                        \n" +
                    "                              ...*******************..,******************...                        \n" +
                    "                              ...******,************..,***********.******...                        \n" +
                    "                              ...*****...***********..,**********...*****...                        \n" +
                    "                              ...*****...***********..,**********...*****...                        \n" +
                    "                               ..      ..           ..           ...     ..                         \n" +
                    "                                                                                                    \n" +
                    "                                                                                                    \n" +
                    "                                                                                                    \n" +
                    "                                                                                                    ");


            for (int i = 0; i < icon.length(); i++) {
                try{
                    System.out.print(icon.charAt(i));
                    Thread.sleep(1);
                }
                catch (Exception e){

                }


            }
            System.out.println();
            typingAnimation("Hiiii");
            Thread.sleep(200);
            typingAnimation("This is Inspector \"Oliver Orlando Pandiyan\"");
            Thread.sleep(1000);
            typingAnimation("Get it?");
            Thread.sleep(800);
            typingAnimation("\"Oliver Orlando Pandiyan\" (\"OOP\")");
            Thread.sleep(600);
            typingAnimation("Yes, Object Oriented Programming!!, I was Soooo Involved in programming, thus I Changed my own name!!");
            Thread.sleep(1000);
            typingAnimation("But, you Can call me Pandy!!");
            Thread.sleep(300);
            typingAnimation("I am very SERIOUS when it comes to code </>");
            typingAnimation("If there is a ERROR or fault in your CODE");
            typingAnimation("I get SUPER MAD");
            Thread.sleep(300);
            typingAnimation("Things Aside");
            typingAnimation("I am here to evaluate and make you coding journey happy and fruitful!!");
            Thread.sleep(220);
            typingAnimation("Let me help you and get you Signed Up!!!");
            typingAnimation("Are you a ");
            typingAnimation("1. Teacher");
            typingAnimation("2. Student");
            typingAnimation("Now, Enter the number which is present before you desired choice!! ");
            Scanner scanner=new Scanner(System.in);
            String choice=scanner.nextLine();
            while (!choice.equals("1")&&!choice.equals("2")){
                typingAnimation("Wrong input!, Enter Again!");
                typingAnimation("1. Teacher");
                typingAnimation("2. Student");
                typingAnimation("Now, Enter the number which is present before you desired choice!! ");

                choice=scanner.nextLine();
                System.out.println(choice);
            }
            String name = "";
            if(choice.equals("1")){
                typingAnimation("Thats Great!!");
                typingAnimation("What's your name? ");
                name= scanner.nextLine();
                typingAnimation("Welcome "+name+" and you are signed up as a Teacher!!");
                typingAnimation("Alright, its time to set up your username and password");
                String user=userName();
                while (user.equals("")){
                    user=userName2();
                }
                while (userNameVerifier(user)){
                    typingAnimation("Looks like a user with that name already exists!!");
                    typingAnimation("Exit and try logging in, or continue by changing your username..");
                    user=userName2();
                    while (user.equals("")){
                        user=userName2();
                    }

                }
                typingAnimation("Your Username is "+user+" do not forget this, as it will be used to log back");
                typingAnimation("Now its time to set up your password..");
                String pass=password();
//                System.out.println(pass);
                userFileCreator(user,pass,name,"teacher");

            }
            else{
                typingAnimation("Thats Great!!");
                typingAnimation("What's your name? ");
                name= scanner.nextLine();
                typingAnimation("Welcome "+name+" and you are signed up as a Student!!");
                typingAnimation("Alright, its time to set up your username and password");
                String user=userName();
                while (user.equals("")){
                    user=userName2();
                }
                while (userNameVerifier(user)){
                    typingAnimation("Looks like a user with that name already exists!!");
                    typingAnimation("Exit and try logging in, or continue by changing your username..");
                    user=userName2();
                    while (user.equals("")){
                        user=userName2();
                    }

                }
                typingAnimation("Your Username is "+user+" do not forget this, as it will be used to log back");
                typingAnimation("Now its time to set up your password..");
                String pass=password();
//                System.out.println(pass);
                userFileCreator(user,pass,name,"student");

            }
        }
        catch (Exception e){
            System.out.println("Title print error");
        }







    }

    public void typingAnimation(String sentence){
        System.out.print("Inspector: ");
        for (int i = 0; i < sentence.length(); i++) {
            try{
//                playWAV("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/keysound.wav");
                System.out.print(sentence.charAt(i));
                Thread.sleep(10);
            }
            catch (Exception e){

            }

        }
        System.out.println();


    }
    public static void playWAV(String filePath) {
        try {
            File audioFile = new File(filePath);
            AudioInputStream audioStream = AudioSystem.getAudioInputStream(audioFile);

            DataLine.Info info = new DataLine.Info(Clip.class, audioStream.getFormat());
            Clip clip = (Clip) AudioSystem.getLine(info);

            clip.open(audioStream);
            clip.start();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String userName(){
        boolean validUserName=true;
        do {
            typingAnimation("Your Username must be greater than 5 letters");
            typingAnimation("No spaces");
            typingAnimation("Only alphabets,numbers and underscore must be in the username");
            typingAnimation("Now Enter your Username");
            Scanner scanner=new Scanner(System.in);
            String username=scanner.nextLine();
            String listOfLetters="abcdefghijklmnopqrstuvxyz1234567890_";
            if(username.length()<6){
                return "";
            }
            for(int i=0;i<username.length();i++){

                int count=0;
                for (int j = 0; j < listOfLetters.length(); j++) {
                    if(username.charAt(i)==listOfLetters.charAt(j)){
                        count++;
                    }

                }
                if (count==0){
                    return "";
                }


            }

            return username;
        }
        while (!validUserName);

    }
    public String  userName2(){
        boolean validUserName=true;
        do {
            System.out.println("Your Username must be greater than 5 letters");
            System.out.println("No spaces");
            System.out.println("Only alphabets,numbers and underscore must be in the username");
            System.out.println("Now Enter your Username again");
            Scanner scanner=new Scanner(System.in);
            String username=scanner.nextLine();
            String listOfLetters="abcdefghijklmnopqrstuvxyz1234567890_";
            username=username.toLowerCase();
            if(username.length()<6){
                return "";
            }
            for(int i=0;i<username.length();i++){

                int count=0;
                for (int j = 0; j < listOfLetters.length(); j++) {
                    if(username.charAt(i)==listOfLetters.charAt(j)){
                        count++;
                    }

                }
                if (count==0){
                    return "";
                }


            }

            return username;
        }
        while (!validUserName);
    }

    public String password(){
        typingAnimation("Here are the rules for your password: ");
        typingAnimation("Also, we don't store you password as it is, we encrypt it and then store it!!");
        typingAnimation("Thus it is very secure, and maintains privacy...");
        System.out.println("\n");
        System.out.println("\n");
        typingAnimation("Here are the rules for the password..");
        typingAnimation("It should be longer than 8 letters..");
        typingAnimation("Must contain a Uppercase, Lowercase, Symbol and a digit");
        boolean verifiedPassword=false;
        String alpha="abcdefghijklmnopqrstuvxyz";
        String num="1234567890";
        String sym="!@#$%^&*()_+-=][}{/?>.,<`~";
        Scanner s=new Scanner(System.in);
        String pass="";
        while (!verifiedPassword){

            typingAnimation("Enter your password..");
            pass=s.nextLine();
            int count=0;

            int lowercaseCount=0;
            alpha=alpha.toLowerCase();
            for(int i=0;i<pass.length();i++){
                for (int j = 0; j < alpha.length(); j++) {
                    if(pass.charAt(i)==alpha.charAt(j)){
                        lowercaseCount++;
                    }

                }
            }
            if(lowercaseCount>0){
                count++;
            }

            int uppercaseCount=0;
            alpha=alpha.toUpperCase();
            for(int i=0;i<pass.length();i++){
                for (int j = 0; j < alpha.length(); j++) {
                    if(pass.charAt(i)==alpha.charAt(j)){
                        uppercaseCount++;
                    }

                }
            }
            if(uppercaseCount>0){
                count++;
            }


            int digitCount=0;

            for(int i=0;i<pass.length();i++){
                for (int j = 0; j < num.length(); j++) {
                    if(pass.charAt(i)==num.charAt(j)){
                        digitCount++;
                    }

                }
            }
            if(digitCount>0){
                count++;
            }


            int symCount=0;
            for(int i=0;i<pass.length();i++){
                for (int j = 0; j < sym.length(); j++) {
                    if(pass.charAt(i)==sym.charAt(j)){
                        symCount++;
                    }

                }
            }
            if(symCount>0){
                count++;
            }
            if(pass.length()>8){
                count++;
            }

            if(count==5){
                verifiedPassword=true;
            }

        }


        return encrypt(pass);




    }

    public String encrypt(String word){
        String encryptText="";
        int enpKey=6583;

        for (int i = 0; i < word.length(); i++) {
            int temp=word.charAt(i);
            temp*=enpKey;
            while (temp>99){
                temp/=10;
            }
            encryptText+=temp;

        }
        return encryptText;

    }

    public void userFileCreator(String username,String password,String user,String role){
        try{
            FileWriter f=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/userdata/usrpass.txt",true);
            String insertFormat="\n"+username+"\t"+password+"\t"+user+"\t"+role;
            f.write(insertFormat);
            f.close();
            if(role.equals("teacher")){
                File f3=new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/");
                f3.mkdir();
                FileWriter f2=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+username+".txt",true);
                f2.write(user+"\n");
                f2.close();

                FileWriter f4=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignments"+".txt",true);
                FileWriter f5=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"enrolledStudents"+".txt",true);
                FileWriter f6=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"stats"+".txt",true);

                File f7=new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Teachers/"+username+"/"+"assignmentFiles/");
                f7.mkdir();
                f4.close();
                f5.close();
                f6.close();
            } else if (role.equals("student")) {
                File f3=new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/");
                f3.mkdir();
                FileWriter f2=new FileWriter("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/"+username+".txt",true);
                f2.write(user+"\n");
                f2.close();
                File f4=new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/Students/"+username+"/Assignments");
                f4.mkdir();

                
            }


        }
        catch (Exception e){
            System.out.println("Error Creating File..");
            System.out.println(e.getMessage());
        }


    }

    public boolean userNameVerifier(String username){
        boolean userPresent=false;
        try{
            File f=new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/userdata/usrpass.txt");
            Scanner s=new Scanner(f);
            String fileContent="";
            while (s.hasNextLine()){
                fileContent+=s.nextLine();
                fileContent+="\n";

            }

            String[] content=fileContent.split("\n");
            for(String i:content){
                String temp[] = i.split("\t");
                if(temp[0].equals(username)){
                    userPresent=true;
                }

            }
//            System.out.println(userPresent);


        }
        catch (Exception e){
            System.out.println("reading Error");
        }
        return userPresent;
    }

    public boolean userNameAndPassVerifier(String username,String pass){
        boolean userPresent=false;
        try{
            File f=new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/userdata/usrpass.txt");
            Scanner s=new Scanner(f);
            String fileContent="";
            while (s.hasNextLine()){
                fileContent+=s.nextLine();
                fileContent+="\n";

            }

            String[] content=fileContent.split("\n");
            for(String i:content){
                String temp[] = i.split("\t");
                if(temp[0].equals(username)){
                    userPresent=true;
                    if(temp[1].equals(pass)){
                        return true;
                    }
                }

            }
//            System.out.println(userPresent);


        }
        catch (Exception e){
            System.out.println("reading Error");
        }
        return false;
    }

    public String getUserRole(String username){
        boolean userPresent=false;
        try{
            File f=new File("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader/userdata/usrpass.txt");
            Scanner s=new Scanner(f);
            String fileContent="";
            while (s.hasNextLine()){
                fileContent+=s.nextLine();
                fileContent+="\n";

            }

            String[] content=fileContent.split("\n");
            for(String i:content){
                String temp[] = i.split("\t");
                if(temp[0].equals(username)){
                    return temp[3];
                }

            }
//            System.out.println(userPresent);


        }
        catch (Exception e){
            System.out.println("reading Error");
        }
    return "";

    }


    public static void main(String[] args) {
        SignUpToCodeGrader s = new SignUpToCodeGrader();
        s.createNewAcc();



    }


}
