#include <iostream>
using namespace std;

int y = 1;
void fv(int x)                   // x is a value parameter
{
   x = x + 5;
}
void fr(int &z)                  // z is a reference parameter
{
   z = z + 5;
}
void fvr(int x, int &z)          // x is value, z is ref parameter
{
   z = x;
}
int main()
{
   fv(y);                        // call by value
   cout << "y = " << y << endl;  // y is still 1
   fr(y);                        // call by reference
   cout << "y = " << y << endl;  // y is now 6
   fvr(20, y);
   cout << "y = " << y << endl;  // y is now 20
}
