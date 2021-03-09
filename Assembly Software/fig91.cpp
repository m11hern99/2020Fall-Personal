#include <iostream>
using namespace std;

void f(int *p)                    // p receives the address of x
{
   *p = 3;                        // x is assigned 3
}
int main()
{
   int x;
   f(&x);                        // &x is an int *
   cout << "x = " << x << endl;  // outputs 3
}
