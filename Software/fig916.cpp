#include <iostream>
using namespace std;

int x, y;
int add_one(int $z)
{
   return z + 1;
}
int main()
{
   x = 1;
   y = add_one(x);    // value returned is assigned to y
   cout << "y = " << y << endl;
}
