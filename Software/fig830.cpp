#include <iostream>
using namespace std;

int main()
{
   short int x;
   const short int count = 16;    // count = number bits in short int
   short int mask = 0x8000;       // mask has only leftmost bit= 1
   cout << "Enter a decimal number: ";
   cin >> x;
   cout << "Binary equivalent = ";
   for (short int i = 1; i <= count; i++) {
      if (x & mask)               // bitwise AND; leftmost bit == 1?
         cout << 1;
      else
         cout << 0;
      x = x << 1;                 // left shift x one position
   }
   cout << endl;
}
