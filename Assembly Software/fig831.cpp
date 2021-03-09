#include <iostream>
using namespace std;

void frec(int x)           // recursive function
{
   if (x == 0)
      cout << "B\n";
   else {
      cout << "D\n";
      frec(x-1);           // recursive call
      cout << "U\n";
   }
}
int main()
{
   frec(2);
}
