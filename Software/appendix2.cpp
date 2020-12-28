// Sample Program 2                                            
#include <iostream>                                            
using namespace std;                                           
                                                               
int main()                                                    
{                                                              
   int a[] = { 1, 2, 3 };       // local array                             
   int x;                                                      
   int *p;                      // p is an int pointer               
                                                               
   p = &x;                      // p now points to x
   *p = 5;                      // assign 5 x
   cout << "x = " << x << endl; // display "x = 5"
   p = a;                       // p now points to a[0]      
   cout << *p << endl;          // display a[0]
   p = p + 2;                   // p now points to a[2]
   cout << *p << endl;          // display a[2]
   p = new int[3];              // p assigned address of array
   p[1] = 5;                    // assign 5 to 2nd slot
   *(p + 1) = 6;                // assign 6 to 2nd slot
   cout << p[1] << endl;        // display 2nd slot
   return 0;
}                                                              
