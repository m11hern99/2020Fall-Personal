#include <iostream>
using namespace std;

char *gp;
void mod_string(char *p)
{
   *p = 'X';
}
int main()
{
   mod_string("abc");
   gp = "abc";
   cout << gp << endl; // would output Xbc if only one dw for "abc"
}
