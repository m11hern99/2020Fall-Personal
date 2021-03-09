#include <iostream>
using namespace std;

void fc()
{
   int dla ;              // dynamic local variable
   int dlb = 7;           // dynamic local variable

   static int sla;        // static local variable
   static int slb = 5;    // static local variable

   cout << sla << endl;
   cout << slb << endl;
   dla = 25;
   dlb = 26;
   sla = 27;
   slb = 28;

}
int main()
{
   fc();
   // sla and slb retain values 26 and 27 between calls
   fc();
}
