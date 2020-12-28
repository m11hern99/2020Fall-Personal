#include <iostream>
using namespace std;
int main()
{
   char c;
   c = -1;                 // -1 is truncated to fit into c
   if (c == -1)            // promote c to int
      cout << "equal\n";
   else
      cout << "not equal\n";
   return 0;
}
