// Sample Program 3                              
#include <iostream>                              
using namespace std;                             
                                                 
void f(int z);                     // prototype for f
int gv1;                           // global, initial value is 0
int gv2 = 5;                       // global, initial value is 5

int main()                                      
{                                                
   f(2); f(3);                                     
   return 0;
}                                                
void f(int z)                      // z is a parameter                   
{                                                
   int x;                          // dyn local created on each call 
                                   // value of x undefined
   x = z;                          // now value of x defined              
   cout << "x = " << x << endl;                  
   cout << "gv1 = " << gv1 << endl;                
   cout << "gv2 = " << gv2 << endl;                
   gv1++; gv2++;                   // increment gv1, gv2              
}                                                
