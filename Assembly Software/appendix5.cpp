// Sample Program 5
#include <iostream>                                     
using namespace std;                                    
                                                        
void f(int x, int &r)         // r is ref parm, r points to y
{                                                       
    r = x;                    // r dereferenced
}                                                       
int main()                                             
{                                                       
   int y;                                               
   f(5, y);                   // pass 5 and address of y
   cout << "y = " << y << endl;                         
   return 0;
}                                                       
