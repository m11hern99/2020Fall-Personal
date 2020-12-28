#include <iostream>
using namespace std;

int gv = 5;
void f(int *&z)           // z is a reference parameter
{
   z = &gv;               // x assigned address of gv
   cout << *z << endl;    // display *x
}
int main()
{
   int *x;
   f(x);                  // call by reference
   cout << *x << endl;    // display *x
}
