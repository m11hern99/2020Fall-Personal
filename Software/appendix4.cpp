// Sample Program 4                                     
#include <iostream>                                     
using namespace std;                                    
                                                        
void f(int x, int *p)         // x gets 5; p points to y
{                                                       
    *p = x;                   // assign x to y
}                                                       
int main()                                             
{                                                       
   int y;                                               
                                                        
   f(5, &y);                  // pass 5 and address of y 
   cout << "y = " << y << endl;                         
   return 0;
}                                                       
