#include <iostream>
using namespace std;

int x = 1, y = 2;
void fv2(int z)                // uses call by value
{
    cout << "z = " << z << endl;
    z = 5;
}
void fr2(int &z)               // uses call by reference
{
    cout << "z = " << z << endl;
    z = 5;
}
int main()
{
   fv2(x);       // z = 1   is displayed
   fv2(100);     // z = 100 is displayed
   fv2(x + y);   // z = 3   is displayed
   fr2(x);       // z = 1   is displayed, x is assigned 5
   fr2(100);     // z = 100 is displayed
   fr2(x + y);   // z = 7   is displayed
}
