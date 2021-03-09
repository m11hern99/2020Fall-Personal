#include <iostream>
using namespace std;

int x;        // global variable with no initial value specified
void fa()     
{             // cannot reference y from within fa
   x = x + x + 2; 
}
int y = 3;   // global variable with initial value specified
void fb()
{
   x = 5;
   y = -2;
   fa();
}
int main()
{
   fb();
   cout << "x = " << x << endl;    // displays "x = 12"
   cout << "y = " << y << endl;    // displays "y = -2"
}
