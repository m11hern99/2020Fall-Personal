#include <iostream>
using namespace std;

int ga[3], x;                // ga is global array
void arrays()
{
     static int sla[3];      // sla is a static local array
     int dla[3];             // dla is a dyn local array

     cout << "enter index\n";
     cin >> x;

     ga[2] = 99;
     ga[x] = 99;

     sla[2] = 99;
     sla[x] = 99;

     dla[2] = 99;
     dla[x] = 99;

}
int main ()
{
   arrays();
}
