import java.util.Scanner;

public class Fibonacci {

        public static void main(String []args){

            Scanner scanner = new Scanner(System.in);
            System.out.println("Informe um número: ");
            int numero = scanner.nextInt();

            if (verificarFibonacci(numero)) {
                System.out.println(numero + "Está na sequência Fibonacci");
            }else{
                System.out.println(numero + "Não está na sequência Fibonacci");
            }

                scanner.close();
        }

        public static boolean verificarFibonacci(int numero){
            int a = 0;
            int b = 1;

            while (a <= numero){
                if (a == numero){
                    return true;
                }

                int proximo = a + b;
                a = b;
                b = proximo;
            }

            return false;
        }
    }