#include <iostream>
using namespace std;

int p = 1;
void n(int #x)        // # signals the name mechanism
{
   int y;

   y = x;
   cout << y << endl;
   p = p + 5;
   y = x;
   cout << y << endl;
}

int main()
{
   int q = 2;
   n(p + q);         // argument is p + q
   n(q);             // argument is q
   return 0;
}
