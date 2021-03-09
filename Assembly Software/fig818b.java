class S {
   int x;
   int y;
}

class Pex {
   public static void main(String arg[]) {
      S p;             // create reference p
      p = new S();     // assign p an instance of S
      p.x = 3;         // access x via p
      p.x = 4;         // access y via p
   }
}
