#include <iostream>
using namespace std;
int t = 10, q;
void name_test(int #x)
{
   q = x;    // name parameter is on right side
   x = 5;    // name parameter is on left side
}
int main()
{
   name_test(t);
   cout << t << endl;
   cout << q << endl;
   return 0;
}
