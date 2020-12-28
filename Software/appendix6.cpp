// Sample Program 6                                          
#include <iostream>                                          
using namespace std;                                         
                                                             
class K {                                                    
public:                                                      
   int x;                                                    
   void f(int a);               // prototype for f
};                              // remember the semicolon       
void K::f(int a)                // definition of f
{                                                            
   x = a;                                                    
}                                                            

int main()                                                  
{                                                            
   K k, *p, *q;                 /* k is a K object               
                                   p, q are K-object pointers */ 
   p = &k;                      // assign p the address of k     
   k.f(1);                      // invoke f directly thru k
   (*p).f(1);                   // another way to invoke f
   p -> f(1);                   // another way to invoke f
   cout << k.x << endl;         // display x directly thru k     
   cout << (*p).x << endl;      // display x via ptr p
   cout << p -> x << endl;      // display x via ptr p           
   q = new K;                   // assign address of new obj to q
   (*q).f(2);                   // invoke f via ptr q       
   q -> f(2);                   // invoke f via ptr q
   cout << (*q).x << endl;      // display x via ptr q           
   cout << q -> x << endl;      // display x via ptr q           
   return 0;                 
}                                                            
