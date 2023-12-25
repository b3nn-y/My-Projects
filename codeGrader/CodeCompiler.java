package JavaPrograms.codeGrader;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class CodeCompiler {

    public static void main(String[] args) {
//        CodeCompiler compiler = new CodeCompiler();
//        compiler.setWorkingDirectory("/home/benny/Desktop/ZS/Java/JavaPrograms/codeGrader");
//        List<String> commands = Arrays.asList("bash", "-c"," java SampleJavaCode.java < input.txt;");
//        compiler.runCommands(commands);
    }

    public CodeCompiler(String path){
        setWorkingDirectory(path);
    }

    public void setWorkingDirectory(String directoryPath) {
        System.setProperty("user.dir", directoryPath);
    }

    public String[] runCommands(List<String> commands) {
        String userPath = System.getProperty("user.dir");
//        System.out.println("User Directory: " + userPath);
        String[] output = new String[2];
        try {
            ProcessBuilder processBuilder = new ProcessBuilder(commands);
            processBuilder.directory(new java.io.File(System.getProperty("user.dir")));

            Process process = processBuilder.start();

            BufferedReader buffOutput = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            String inpStream="";
            while ((line = buffOutput.readLine()) != null) {
                System.out.println(line);
                inpStream+=line;
                inpStream+="\n";
            }
            String errStream="";
            BufferedReader buffError = new BufferedReader(new InputStreamReader(process.getErrorStream()));
            String line2;
            while ((line2 = buffError.readLine()) != null) {
                System.out.println(line2);
                errStream+=line2;
                errStream+="\n";
            }
            output[0]=inpStream;
            output[1]=errStream;
            int exitCode = process.waitFor();
            System.out.println("Exit Code: " + exitCode);
        } catch (IOException | InterruptedException e) {
            System.out.println("The program has encountered an ERROR....");
            e.printStackTrace();
        }

        return output;
    }
}

