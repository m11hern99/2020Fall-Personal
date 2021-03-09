// Sample Program 1                                      
#include <iostream>             // required by cin, cout
using namespace std;            /* now do not have to 
                                   qualify names of cin, 
                                   cout, and endl  */
int main() 
{                        
   int x;          

   cout << "Enter integer\n";   // displays "Enter integer"
   cin >> x;                    // reads integer into x
   cout <<  x << " squared = "  // displays "3 squared = 9"
        << x*x << endl;          
   return 0;
}                                                        
