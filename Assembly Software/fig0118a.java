class E1 {
   public static void main(String[] s)
   {
      float sum = 0.0f, z = 0.001f;
      for (int i = 1; i <= 1000; i++)
         sum = sum + z;
      System.out.print("sum = ");
      System.out.println(sum);
   }
}
