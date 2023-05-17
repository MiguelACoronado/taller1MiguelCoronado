package instagram.Amigos;
import java.util.Scanner;

public class Amigo {
  
    Scanner lectura = new Scanner(System.in);

    private String name;
    private int num;
    private String user;
   
    

    static Amigo usuario1 = new Amigo();
    
    public void crearAmigo(){

        

        System.out.println("Ingrese nombre amigo");
         name = lectura.nextLine();
        System.out.println("Ingrese numero amigo");
        num = lectura.nextInt();
        lectura.nextLine();
        System.out.println("Ingrese usuario amigo");
        user = lectura.nextLine();
  
    }

   

    public void validarAmigo(){

        String confirmUser;

        System.out.println("Confirme su usuario");
        confirmUser = lectura.nextLine();

       

        if ( confirmUser.equals(user)){
            
            System.out.println("Bienvenido al sistema");
        }else{
            System.out.println("Acceso denegado");
        }

    }

    public void mostrarAmigo(){

        System.out.println("Su nombre es: " + name);
        System.out.println("Su numero es: " + num);
        System.out.println("Su usuario es: " + user);
    }

      public static void main(String[] args) {
        usuario1.crearAmigo();
        usuario1.validarAmigo();
        usuario1.mostrarAmigo();
    }
    
    
}