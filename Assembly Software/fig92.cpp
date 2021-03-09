#include <iostream>
using namespace std;

void f(int &z)                   // z is a reference parameter
{
   z = 3;                        // x assigned 3
}
int main()
{
   int x;
   f(x);                         // x itself is passed to f
   cout << "x = " << x << endl;  // outputs 3
}
